import type {PicsumImageData} from '../store/types';

export class ApiService {
  #apiRoot: string;

  constructor(apiRoot: string) {
    this.#apiRoot = apiRoot;
  }

  public async getImageList(page: number = 1, limit: number = 30): Promise<PicsumImageData[]> {
    return this.fetchUrl<PicsumImageData[]>(
      '/v2/list', {page, limit}
    );
  }

  private async fetchUrl<T>(path: string, searchParams?: Record<string, string | number | boolean | undefined | null>): Promise<T> {
    const stringifiedParams = searchParams ? `?${new URLSearchParams(Object.entries(searchParams).map(([key, value]) => [key, String(value)])).toString()}` : '';
    return (await fetch(`${this.#apiRoot}${path}${stringifiedParams}`)).json();
  }
}
