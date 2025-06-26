import {createContext} from 'react';
import {ApiService} from '../services/ApiService';

export const ApiServiceContext = createContext<ApiService | null>(null);
