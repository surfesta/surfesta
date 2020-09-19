import React, { useState } from "react";
import "codemirror/lib/codemirror.css";
import "tui-editor/dist/tui-editor.css";
import "tui-editor/dist/tui-editor-contents.css";
import { Editor } from "@toast-ui/react-editor";
import { useEffect } from "react";
import UploadService from "../../../services/UploadService";
import { validateFileInput } from "../../../utils/validateFileInput";

export default function ToastEditor({ Ref }) {
  const [uploadedFile, setUploadedFile] = useState({});
  useEffect(() => {
    if (!uploadedFile.filePath) return;
    const node = document.createElement("img");
    node.src = uploadedFile.filePath;
    document.querySelectorAll(".tui-editor-contents")[1].appendChild(node);
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
          if (!validateFileInput(_file)) return;
          const formData = new FormData();
          formData.append("file", _file);
          try {
            const { filePath } = await UploadService.uploadImage(formData);
            setUploadedFile({ filePath });
          } catch (err) {
            console.log(err);
          }
        },
      }}
    />
  );
}
