import React, { useState } from "react";
import "../styles.css";

import Dropzone from "react-dropzone";
import JSONPretty from "react-json-pretty";
//import JSONPretty from 'react-json-prettify';

import "react-json-pretty/themes/monikai.css";

import Button from "react-bootstrap/Button";

export default function FileUploader(props) {
  const [fileNames, setFileNames] = useState([]);
  const [content, setContent] = useState("");

  const handleDrop = (acceptedFiles) => {
    setFileNames(acceptedFiles.map((file) => file.name));
    var reader = new FileReader();
    reader.onload = function (e) {
      var contents = e.target.result;
      //console.log(contents);
      setContent(contents);
      //console.log(content);
      // props.onUpload(contents);
    };
    reader.readAsText(acceptedFiles[0]);
  };

  const onCancelClick = (e) => {
    //console.log(e);
    setContent("");
    setFileNames([]);
  };

  const onAcceptClick = (e) => {
    //console.log(e);
    props.onUpload(content);
  };

  return (
    <div>
      <Dropzone onDrop={handleDrop}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps({ className: "dropzone" })}>
            <input {...getInputProps()} />
            <p>
              ลากไฟล์ Swtiching Order [ฟอร์แมต JSON] แล้ววางในตำแหน่งนี้
              หรือคลิกเพื่อเลือกเปิดไฟล์
            </p>
          </div>
        )}
      </Dropzone>
      {fileNames.length === 1 && (
        <div style={{ textAlign: "left" }}>
          <strong>Files:</strong>
          <ul>
            {fileNames.map((fileName) => (
              <li key={fileName}>{fileName}</li>
            ))}
          </ul>
          <div>
            <JSONPretty id="json-pretty" data={content}></JSONPretty>
          </div>
          <div style={{ textAlign: "center", marginBottom: 50 }}>
            <Button onClick={onAcceptClick}>ตำเนินการต่อ</Button>{" "}
            <Button variant="secondary" onClick={onCancelClick}>
              ยกเลิก
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
