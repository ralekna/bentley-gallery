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
  const [selectedImage, setSelectedImage] = useState<PicsumImageData | null>(null);


  useEffect(() => {
    if (!apiService) return;
    console.log('Fetching image list');
    apiService.getImageList().then(setPhotos);
  }, [apiService]);

  return (
    <div className="gallery">
      <div className="tiles">
        {photos.map((imageData) => (
          <ImageTile key={imageData.id} image={imageData}
                     onSelect={setSelectedImage}
                     scaledUrl={getImageUrl(imageData, imageHeight, apiRoot)}/>
        ))}
      </div>
      <LoadingIndicator loading/>
      {selectedImage && <ImageViewer image={selectedImage} onClose={() => setSelectedImage(null)}/>}
    </div>
  );
}
