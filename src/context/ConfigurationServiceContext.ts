import {createContext} from "react";
import {ConfigurationService} from "../services/ConfigurationService";

export const ConfigurationServiceContext = createContext<ConfigurationService>(new ConfigurationService());