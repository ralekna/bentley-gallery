import type { PicsumImageData } from '../store/types';

export class ApiService {
  constructor(private apiRoot: string) {}

  private fetchUrl<T>(path: string): () => Promise<T> {
    return async () => {
      return (await fetch(this.apiRoot + path)).json();
    };
  }

  public getImageList = this.fetchUrl<PicsumImageData[]>(
    '/v2/list?page=1&limit=100'
  );
}
