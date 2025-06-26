import {useContext, useEffect, useState} from 'react';
import type {PicsumImageData} from '../../store/types';
import {ImageTile} from './ImageTile.tsx';
import {ApiServiceContext} from '../../context/ApiServiceContext';
import {ConfigurationServiceContext} from "../../context/ConfigurationServiceContext.ts";
import {ImageViewer} from "./ImageViewer.tsx";
import {getImageUrl} from "../../utils/image-utils.ts";
import {LoadingIndicator} from "./LoadingIndicator.tsx";

export function Gallery() {
  const apiService = useContext(ApiServiceContext);
  const configurationService = useContext(ConfigurationServiceContext)!;

  const apiRoot = configurationService.getConfigurationValue('apiRoot');
  const imageHeight = parseFloat(configurationService.getConfigurationValue('imageTileHeight'));

  const [photos, setPhotos] = useState<PicsumImageData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<PicsumImageData | null>(null);

  useEffect(() => {
    if (!apiService) return;
    if (!configurationService) return;
    if (loading) return; // Prevent multiple requests while loading
    // Fetch images only if not already loading
    setLoading(true);
    apiService.getImageList(currentPage, configurationService.getConfigurationValue('pageSize')).then((retrievedPhotos) => {
      setPhotos((prevPhotos) => prevPhotos.concat(retrievedPhotos))
      setLoading(false);
    }).catch((error) => {
      console.error('Error fetching images:', error);
      setLoading(false);
    });
  }, [apiService, currentPage, configurationService]);

  useEffect(() => {
    let intervalId: number | null = null;

    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const documentHeight = document.documentElement.offsetHeight;

      if (scrollPosition >= documentHeight - 100 && !loading) {
        // If we are near the bottom of the page and not currently loading, fetch more images
        if (intervalId) {
          clearTimeout(intervalId);
        }
        intervalId = setTimeout(() => {
          setCurrentPage((prevPage) => prevPage + 1)
        }, 500); // Debounce the scroll event to avoid too many requests

      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentPage, loading]);

  return (
    <div className="gallery">
      <div className="tiles">
        {photos.map((imageData, index) => (
          <ImageTile key={`${imageData.id}-${index}`} image={imageData}
                     onSelect={setSelectedImage}
                     scaledUrl={getImageUrl(imageData, imageHeight, apiRoot)}/>
        ))}
        <div className="spacer"/>
      </div>
      <LoadingIndicator loading={loading}/>
      {selectedImage && <ImageViewer image={selectedImage} onClose={() => setSelectedImage(null)}/>}
    </div>
  );
}
