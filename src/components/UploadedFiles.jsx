import React from 'react';
const UploadedFiles = ({ files }) => {
  const downloadFile = (file) => {
    saveAs(file, file.name);
  };

  return (
    <div className="uploaded-files">
      <h2>Uploaded Files</h2>
      <div className="file-list">
        {files.map((file) => (
          <div className="file-item" key={file.name}>
            <p>{file.name}</p>
            <button onClick={() => downloadFile(file)}>Download</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UploadedFiles;
