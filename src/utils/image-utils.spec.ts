import {describe, expect, it} from 'vitest'
import {getImageUrl} from "./image-utils.ts";
import type {PicsumImageData} from "../store/types.ts";

describe("utils/image-utils", () => {
  describe("getImageUrl", () => {
    it('should form url from given image size', () => {
      const image: PicsumImageData = {
        id: '12345',
        width: 8000,
        height: 3000,
        url: `https://picsum.photos/id/12345/8000/3000`,
        download_url: 'https://www.udiscovermusic.com/wp-content/uploads/2020/09/Sonic-Youth-GettyImages-104077369.jpg',
        author: "Sonic Youth",
      };
      const heightFromConfig = 150;
      const expectedUrl = `https://picsum.photos/id/${image.id}/400/150`;
      expect(getImageUrl(image, heightFromConfig, 'https://picsum.photos')).toBe(expectedUrl);
    });
  })
})