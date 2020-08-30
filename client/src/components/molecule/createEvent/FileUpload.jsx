import React, { useState } from 'react';
// import Message from "./Message";
import axios from 'axios';

export default function FileUpload() {
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Choose File');
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState('');

  const onChange = async (e) => {
    const _file = e.target.files[0];
    if (_file === null || _file === undefined) {
      {
        alert(`다시 시도해주세요`);
        return;
      }
    }
    const _filetype = _file.type;
    const _filename = _file.name;
    const _filesize = _file.size;
    // 7 메가바이트
    if (_filesize > 7000000) {
      alert(`파일이 허용 범위를 초과했습니다. ${_filesize * 0.000001}MB > 7MB`);
      return;
    }
    if (
      _filetype !== 'image/jpg' &&
      _filetype !== 'image/jpeg' &&
      _filetype !== 'image/png'
    ) {
      alert(`지원하지 않는 형식의 타입입니다. ${_filetype}`);
      return;
    }
    const formData = new FormData();
    formData.append('file', _file);

    try {
      const res = await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const { fileName, filePath } = res.data;

      setUploadedFile({ fileName, filePath });
      setFile(_file);
      setFilename(_filename);

      setMessage('File Uploaded');
    } catch (err) {
      if (err.response.status === 500) {
        setMessage('There was a problem with the server');
      } else {
        setMessage(err.response.data.msg);
      }
    }
  };

  return (
    <>
      <input
        type="file"
        className="custom-file-input"
        id="customFile"
        onChange={onChange}
        accept="image/jpeg, image/png, image/jpg"
      />
      <label className="custom-file-label" htmlFor="customFile">
        {uploadedFile ? (
          <img
            className="custom-thumbnail"
            src={uploadedFile.filePath}
            alt=""
          />
        ) : null}
      </label>
      <p className="upload-type">
        7MB 이하의 png, jpg, jpeg 이미지만 업로드 가능해요.
        <br /> 3:4 비율의 이미지가 가장 잘 어울리죠!
      </p>
    </>
  );
}