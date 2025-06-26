type ImageProps = {
  id: string;
  author: string;
  url: string;
};

export function ImageTile({id, url, author}: ImageProps) {

  return (
    <figure>
      <img src={url} loading="lazy" alt={author}/>
      <figcaption>{author}</figcaption>
    </figure>
  );
}
