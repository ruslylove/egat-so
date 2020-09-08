import React, { useState } from "react";
import "../styles.css";

import Dropzone from "react-dropzone";

export default function FileUploader(props) {
  const [fileNames, setFileNames] = useState([]);
  const handleDrop = (acceptedFiles) => {
    setFileNames(acceptedFiles.map((file) => file.name));
    var reader = new FileReader();
    reader.onload = function (e) {
      var contents = e.target.result;
      //console.log(contents);
      props.onUpload(contents);
    };
    reader.readAsText(acceptedFiles[0]);
  };
  return (
    <div>
      <Dropzone onDrop={handleDrop}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps({ className: "dropzone" })}>
            <input {...getInputProps()} />
            <p>Drag'n'drop files, or click to select files</p>
          </div>
        )}
      </Dropzone>
      {fileNames.length===1 && <div>
        <strong>Files:</strong>
        <ul>
          {fileNames.map((fileName) => (
            <li key={fileName}>{fileName}</li>
          ))}
        </ul>
      </div>}
    </div>
  );
}
