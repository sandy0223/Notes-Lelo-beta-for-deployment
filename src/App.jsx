import React, { useState } from 'react';
import NavBar from './components/NavBarr';
import FileUpload from './components/FileUpload';
import UploadedFiles from './components/UploadedFiles';
import { BrowserRouter , Route, Routes} from "react-router-dom";
import './App.css';

function App() {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [filters, setFilters] = useState({ semester: '', subject: '', section: '' });

  const handleFileUpload = (file) => {
    setUploadedFiles([...uploadedFiles, file]);
  };

  const handleFilterChange = (name, value) => {
    setFilters({ ...filters, [name]: value });
  };

  return (
    <div className="App">
      <BrowserRouter>
      <NavBar onFilterChange={handleFilterChange} />
      <div className="routes">
      <Routes>
        <Route path="/Admin" element={<FileUpload onFileUpload={handleFileUpload} />}/>
        <Route path="/" element={<UploadedFiles files={uploadedFiles} />}/>
      </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;


