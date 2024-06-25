import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
import AlbumDetail from './components/album detail/AlbumDetail';
import AlbumPhotos from './components/album photos/AlbumPhotos';
import Albums from './components/album/Albums';

function App() {
  return (
   <BrowserRouter>
     <Routes>
       <Route path = '/' element = {<Home />} />
       <Route path = '/about' element = {<About />} />
       <Route path = '/albums' element = {<Albums />} />
       <Route path="/albums/:id" element={<AlbumDetail />} />
       <Route path="/albums/:id/photos" element={<AlbumPhotos />} />
     </Routes>
   </BrowserRouter>
  );
}

export default App;
