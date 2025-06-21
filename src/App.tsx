import { Suspense } from 'react';
import './App.css';
import { Gallery } from './components/gallery/Gallery';

function App() {
  return (
    <div>
      <h1>Gallery</h1>
      <Suspense fallback={<div>Loading images..</div>}>
        <Gallery />
      </Suspense>
    </div>
  );
}

export default App;
