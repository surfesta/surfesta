import React from "react";
import "codemirror/lib/codemirror.css";
import "tui-editor/dist/tui-editor.css";
import "tui-editor/dist/tui-editor-contents.css";
import { Editor } from "@toast-ui/react-editor";

export default function ToastEditor() {
  return (
    <Editor
      previewStyle="vertical"
      height="300px"
      initialEditType="wysiwyg"
      useCommandShortcut={true}
    />
  );
}
