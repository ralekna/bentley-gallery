import {useContext, useEffect, useState} from 'react';
import type {PicsumImageData} from '../../store/types';
import {ImageTile} from './ImageTile.tsx';
import {ApiServiceContext} from '../../context/ApiServiceContext';
import {ConfigurationServiceContext} from "../../context/ConfigurationServiceContext.ts";

function getImageUrl(id: string, width: number, height: number, imageHeight: number, apiRoot: string): string {
  return `${apiRoot}/id/${id}/${Math.round((imageHeight / height) * width)}/${imageHeight}`;
}

export function Gallery() {
  const apiService = useContext(ApiServiceContext);
  const configurationService = useContext(ConfigurationServiceContext)!;

  const apiRoot = configurationService.getConfigurationValue('apiRoot');
  const imageHeight = parseFloat(configurationService.getConfigurationValue('imageTileHeight'));

  const [photos, setPhotos] = useState<PicsumImageData[]>([]);


  useEffect(() => {
    if (!apiService) return;
    if (photos.length > 0) return;
    apiService.getImageList().then(setPhotos);
  }, [apiService, photos.length]);

  return (
    <div className="gallery">
      {photos.map(({id, width, height, author}) => (
        <ImageTile id={id} author={author}
                   url={getImageUrl(id, width, height, imageHeight, apiRoot)}/>
      ))}
    </div>
  );
}
