import React, { useEffect, useRef } from 'react';
import 'codemirror/lib/codemirror.css';
import 'tui-editor/dist/tui-editor.css';
import 'tui-editor/dist/tui-editor-contents.css';
import { Editor } from '@toast-ui/react-editor';
import { useCallback } from 'react';

export default function ToastEditor({ Ref }) {
  return (
    <Editor
      previewStyle="vertical"
      height="450px"
      initialEditType="wysiwyg"
      useCommandShortcut={true}
      ref={Ref}

      // hooks={{
      //   addImageBlobHook: function (blob, callback) {
      //     const uploadedImageURL = uploadImage(blob);
      //     callback(uploadedImageURL);
      //   },
      // }}
    />
  );
}
