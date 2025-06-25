import {useContext, useEffect, useState} from 'react';
import type { PicsumImageData } from '../../store/types';
import { ImageTile } from './ImageTile.tsx';
import { ApiServiceContext } from '../../context/ApiServiceContext';

export function Gallery() {
  const apiService = useContext(ApiServiceContext);
  const [photos, setPhotos] = useState<PicsumImageData[]>([]);

  useEffect(() => {
    if (!apiService) return;
    if (photos.length > 0) return;
    apiService.getImageList().then(setPhotos);
  }, [apiService, photos.length]);

  return (
    <div className="gallery">
      {photos.map(({ id, width, height, author }) => (
        <ImageTile id={id} width={width} height={height} author={author} />
      ))}
    </div>
  );
}
