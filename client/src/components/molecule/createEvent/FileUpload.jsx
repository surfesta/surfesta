import React, { useState, useCallback } from 'react';
import axios from 'axios';
import { useDropzone } from 'react-dropzone';

export default function FileUpload({ inputRef, imgRef }) {
  const onDrop = useCallback((acceptedFiles) => {
    onChange(acceptedFiles[0]);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });
  const [uploadedFile, setUploadedFile] = useState({});

  const uploadImage = async (_file) => {
    if (_file === null || _file === undefined) {
      {
        alert(`다시 시도해주세요`);
        return;
      }
    }
    const _filetype = _file.type;
    const _filesize = _file.size;
    // 7 메가바이트
    if (_filesize > 7000000) {
      alert(`파일이 허용 범위를 초과했습니다. ${_filesize * 0.000001}MB > 7MB`);
      return;
    }
    if (
      _filetype !== 'image/jpg' &&
      _filetype !== 'image/jpeg' &&
      _filetype !== 'image/png' &&
      _filetype !== 'image/webp'
    ) {
      alert(`지원하지 않는 형식의 타입입니다. ${_filetype}`);
      return;
    }
    imgRef.current.parentNode.classList.add('active');
    const formData = new FormData();
    formData.append('file', _file);
    try {
      const res = await axios.post('/api/v1/uploads', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(res);
      const { filePath } = res.data;
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
        className={`custom-file-label ${uploadedFile.filePath ? '' : 'none'}`}
        htmlFor="customFile"
      >
        {uploadedFile ? (
          <img
            className="custom-thumbnail"
            src={uploadedFile.filePath}
            ref={imgRef}
            alt=""
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
