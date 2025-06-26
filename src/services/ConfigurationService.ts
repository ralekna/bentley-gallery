export type Configuration = {
  apiRoot: string;
  imageTileHeight: string;
}

export class ConfigurationService {
  #configuration: Configuration;

  constructor() {
    this.#configuration = {
      apiRoot: import.meta.env.VITE_PICSUM_API_ROOT ?? 'https://picsum.photos',
      imageTileHeight: import.meta.env.VITE_IMAGE_TILE_HEIGHT ?? '150',
    };
  }

  public getConfigurationValue<T extends keyof Configuration>(key: T): Configuration[T] {
    return this.#configuration[key];
  }
}