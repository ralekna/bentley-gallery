import type {PicsumImageData} from "../../store/types.ts";
import {useCallback, useEffect, useState} from "react";
import {LoadingIndicator} from "./LoadingIndicator.tsx";

type ImageViewerProps = {
  image: PicsumImageData;
  onClose: () => void;
}

export function ImageViewer({image, onClose}: ImageViewerProps) {
  const [loading, setLoading] = useState<boolean>(true);

  const {author, download_url: downloadUrl} = image;

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const onOverlayClick = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    // Prevent closing the dialog when clicking inside the figure
    if (event.target === event.currentTarget) {
      onClose();
    }
  }, [onClose]);

  return <dialog open className="image-viewer" autoFocus onClose={onClose}>
    <div className="overlay" onClickCapture={onOverlayClick} aria-hidden="true" role="presentation">
      <figure>
        <button role="button" className="close" onClick={onClose}>×</button>
        <img role="img" className={loading ? 'something' : ''} src={downloadUrl} alt={author}
             onLoad={() => setLoading(false)}/>
        <LoadingIndicator loading={loading}/>
        <figcaption>{author}</figcaption>
        <a href={downloadUrl} target="_blank" download>download</a>
      </figure>
    </div>
  </dialog>
}