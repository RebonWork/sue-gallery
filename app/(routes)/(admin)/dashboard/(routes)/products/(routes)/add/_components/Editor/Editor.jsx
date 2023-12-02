"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import EditorActions from "./EditorActions";
import { useEffect } from "react";

const Editor = ({ onChange, desc }) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: {
          keepMarks: true,
          keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
        },
      }),
    ],
    editorProps: {
      attributes: {
        class: "text-box",
      },
    },
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
  });

  if (desc === "") {
    editor?.commands.setContent(desc);
  }

  useEffect(() => {
    editor?.commands.setContent(desc);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editor]);

  return (
    <div className="editor">
      <h1>Description</h1>
      <EditorActions editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default Editor;
