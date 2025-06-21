import { use, useContext } from 'react';
import type { PicsumImageData } from '../../store/types';
import { Image } from '../image/Image';
import { ApiServiceContext } from '../../context/ApiServiceContext';

export function Gallery() {
  const apiService = use(ApiServiceContext);

  const photos: PicsumImageData[] = use(apiService.getImageList());

  return (
    <div className="gallery">
      {photos.map(({ id, width, height, author }: PicsumImageData) => (
        <Image id={id} width={width} height={height} author={author} />
      ))}
    </div>
  );
}
