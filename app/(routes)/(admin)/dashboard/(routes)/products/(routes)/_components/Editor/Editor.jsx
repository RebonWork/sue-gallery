"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import EditorActions from "./EditorActions";
import { useEffect } from "react";

const Editor = ({ onChange, description, isSubmitSuccessful,value }) => {
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
    content: description,
    onUpdate({ editor }) {
      value = onChange(editor.getHTML());
    },
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      editor?.commands.setContent("");
    }
  }, [isSubmitSuccessful, editor]);


  return (
    <div className="editor">
      <EditorActions editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default Editor;
