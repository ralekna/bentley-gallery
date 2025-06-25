import type { PicsumImageData } from '../store/types';

export class ApiService {
  private apiRoot: string;

  constructor(apiRoot: string) {
    this.apiRoot = apiRoot;
  }

  private fetchUrl<T>(path: string): () => Promise<T> {
    return async () => {
      console.log('calling fetch', this.apiRoot + path)
      return (await fetch(this.apiRoot + path)).json();
    };
  }

  public getImageList = this.fetchUrl<PicsumImageData[]>(
    '/v2/list?page=1&limit=30'
  );
}
