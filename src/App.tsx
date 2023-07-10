import React from 'react';
import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import Home from './Home';
import Story from './Story';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/story" element={<Story/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
