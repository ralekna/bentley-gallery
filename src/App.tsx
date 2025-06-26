import './App.css';
import {Gallery} from './components/gallery/Gallery';
import {useContext} from "react";
import {ConfigurationServiceContext} from "./context/ConfigurationServiceContext.ts";
import {ApiService} from "./services/ApiService.ts";
import {ApiServiceContext} from "./context/ApiServiceContext.ts";

function App() {
  const configurationService = useContext(ConfigurationServiceContext)
  const apiService = new ApiService(configurationService.getConfigurationValue('apiRoot'));

  return (
    <ApiServiceContext value={apiService}>
      <Gallery/>
    </ApiServiceContext>
  );
}

export default App;
