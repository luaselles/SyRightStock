import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PageInitial } from "./view/Paginas"
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<PageInitial />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
