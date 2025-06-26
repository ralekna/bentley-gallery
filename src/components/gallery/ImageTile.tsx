import type {PicsumImageData} from "../../store/types.ts";
import {useCallback, useState} from "react";
import {LoadingIndicator} from "./LoadingIndicator.tsx";

type ImageProps = {
  image: PicsumImageData;
  scaledUrl: string;
  onSelect: (image: PicsumImageData) => void;
};

export function ImageTile({scaledUrl, image, onSelect}: ImageProps) {
  const [loading, setLoading] = useState(true)
  const {author} = image;
  const onSelectCallback = useCallback(() => onSelect(image), [image, onSelect]);
  return (
    <a href={`#${image.id}`} onClick={onSelectCallback}>
      <figure>
        <img className={loading ? 'hidden' : ''} src={scaledUrl} alt={author}
             onLoad={() => setLoading(false)}/>
        <LoadingIndicator loading={loading}/>
        <figcaption>{author}</figcaption>
      </figure>
    </a>
  );
}
