type ImageProps = {
  id: string;
  width: number;
  height: number;
  author: string;
};

const IMAGE_HEIGHT: number = import.meta.env.VITE_IMAGE_HEIGHT;
const PICSUM_API_ROOT: string = import.meta.env.VITE_PICSUM_API_ROOT;

export function Image({ id, width, height, author }: ImageProps) {
  const url = `${PICSUM_API_ROOT}/id/${id}/${Math.round(
    (IMAGE_HEIGHT / height) * width
  )}/${height}`;
  return (
    <figure>
      <img src={url} loading="lazy" />
      <figcaption>{author}</figcaption>
    </figure>
  );
}
