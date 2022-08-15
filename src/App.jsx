import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from '@pages/HomePage';
import InputPage from '@pages/InputPage';

import ScreenLayout from '@layouts/ScreenLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ScreenLayout />}>
          <Route index element={<HomePage />} />
          <Route path="input-item" element={<InputPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
