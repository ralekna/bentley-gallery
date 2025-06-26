import type {PicsumImageData} from "../store/types.ts";

export function getImageUrl({id, width, height}: PicsumImageData, imageHeight: number, apiRoot: string): string {
  return `${apiRoot}/id/${id}/${Math.round((imageHeight / height) * width)}/${imageHeight}`;
}