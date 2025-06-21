import { createContext } from 'react';
import { ApiService } from '../services/ApiService';

const PICSUM_API_ROOT: string = import.meta.env.VITE_PICSUM_API_ROOT;

export const ApiServiceContext = createContext(new ApiService(PICSUM_API_ROOT));
