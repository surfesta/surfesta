import React, { useState } from 'react';
import 'codemirror/lib/codemirror.css';
import 'tui-editor/dist/tui-editor.css';
import 'tui-editor/dist/tui-editor-contents.css';
import { Editor } from '@toast-ui/react-editor';
import axios from 'axios';
import { useEffect } from 'react';

export default function ToastEditor({ Ref }) {
  const [uploadedFile, setUploadedFile] = useState({});
  useEffect(() => {
    if (!uploadedFile.filePath) return;
    const node = document.createElement('img');
    node.src = uploadedFile.filePath;
    document.querySelectorAll('.tui-editor-contents')[1].appendChild(node);
  }, [uploadedFile]);
  return (
    <Editor
      previewStyle="vertical"
      height="450px"
      initialEditType="wysiwyg"
      useCommandShortcut={true}
      ref={Ref}
      hooks={{
        addImageBlobHook: async function (blob) {
          const _file = blob;
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
            alert(
              `파일이 허용 범위를 초과했습니다. ${
                _filesize * 0.000001
              }MB > 7MB`,
            );
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
          const formData = new FormData();
          formData.append('file', _file);
          try {
            const BASE_URL =
              navigator.userAgent === 'ReactSnap'
                ? 'http://ec2-15-164-210-226.ap-northeast-2.compute.amazonaws.com:5000'
                : '';
            const res = await axios.post(
              `${BASE_URL}/api/v1/uploads`,
              formData,
              {
                headers: {
                  'Content-Type': 'multipart/form-data',
                },
              },
            );
            const { filePath } = res.data;
            setUploadedFile({ filePath });
          } catch (err) {
            console.log(err);
          }
        },
      }}
    />
  );
}
