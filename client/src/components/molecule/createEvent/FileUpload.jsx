import React, { useState, useCallback } from "react";
import axios from "axios";
import { useDropzone } from "react-dropzone";
import { validateFileInput } from "../../../utils/validateFileInput";
import UploadService from "../../../services/UploadService";
import { useEffect } from "react";

export default function FileUpload({ inputRef, imgRef }) {
  const onDrop = useCallback((acceptedFiles) => {
    onChange(acceptedFiles[0]);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });
  const [uploadedFile, setUploadedFile] = useState({});
  useEffect(() => {
    setTimeout(() => {
      if (imgRef.current.src) {
        setUploadedFile({ filePath: imgRef.current.src });
      }
    }, 1);
  }, [setUploadedFile]);
  const uploadImage = async (_file) => {
    if (!validateFileInput(_file)) return;
    imgRef.current.parentNode.classList.add("active");
    const formData = new FormData();
    formData.append("file", _file);
    try {
      const { filePath } = await UploadService.uploadImage(formData);
      console.log(filePath);
      setUploadedFile({ filePath });
    } catch (err) {
      console.log(err);
    }
  };
  const onChange = useCallback((e) => {
    const _file = e.target ? e.target.files[0] : e;
    uploadImage(_file);
  });
  return (
    <div {...getRootProps()} className="drop-down-container">
      <input
        {...getInputProps()}
        type="file"
        className="custom-file-input"
        id="customFile"
        onChange={onChange}
        accept="image/jpeg, image/png, image/jpg, image/webp"
        ref={inputRef}
      />
      <label
        className={`custom-file-label ${uploadedFile.filePath ? "" : "none"}`}
        htmlFor="customFile"
      >
        {uploadedFile ? (
          <img
            className="custom-thumbnail"
            src={uploadedFile.filePath}
            ref={imgRef}
          />
        ) : null}
        {isDragActive && (
          <div className="drag-drop">
            <p>Drop the files here ...</p>
          </div>
        )}
      </label>
      <p className="upload-type">
        7MB 이하의 png, jpg, jpeg, webp 이미지만 업로드 가능해요.
        <br /> 3:4 비율의 이미지가 가장 잘 어울리죠!
      </p>
    </div>
  );
}
