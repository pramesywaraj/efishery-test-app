import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from '@pages/HomePage';
import InputPage from '@pages/InputPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/input-item" element={<InputPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
