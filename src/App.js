import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PageInitial, PageAcertos } from "./view/Paginas"
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<PageInitial />} />
          <Route exact path="/acertos" element={<PageAcertos />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
