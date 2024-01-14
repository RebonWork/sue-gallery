import {
  Bold,
  Italic,
  Heading2,
  Strikethrough,
  List,
  ListOrdered,
} from "lucide-react";
import Toggle from "./Toggle";

const EditorActions = ({ editor }) => {
  if (!editor) {
    return null;
  }
  return (
    <div className="editor-menu">
      <div>
        <Toggle
          onPressChange={() => editor.chain().focus().toggleBold().run()}
          pressed={editor.isActive("bold")}
        >
          <Bold />
        </Toggle>
      </div>
      <div>
        <Toggle
          onPressChange={() => editor.chain().focus().toggleItalic().run()}
          pressed={editor.isActive("italic")}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
        >
          <Italic />
        </Toggle>
      </div>
      <div>
        <Toggle
          onPressChange={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          pressed={editor.isActive("heading", { level: 2 })}
        >
          <Heading2 />
        </Toggle>
      </div>
      <div>
        <Toggle
          onPressChange={() => editor.chain().focus().toggleStrike().run()}
          pressed={editor.isActive("strike")}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
        >
          <Strikethrough />
        </Toggle>
      </div>
      <div>
        <Toggle
          onPressChange={() => editor.chain().focus().toggleBulletList().run()}
          pressed={editor.isActive("bulletList")}
          disabled={!editor.can().chain().focus().toggleBulletList().run()}
        >
          <List />
        </Toggle>
      </div>
      <div>
        <Toggle
          onPressChange={() => editor.chain().focus().toggleOrderedList().run()}
          pressed={editor.isActive("orderedList")}
          disabled={!editor.can().chain().focus().toggleOrderedList().run()}
        >
          <ListOrdered />
        </Toggle>
      </div>
    </div>
  );
};

export default EditorActions;
