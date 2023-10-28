"use client";
import { useMemo, useRef, useState } from "react";
import QuillNoSSRWrapper from "./QuillNoSSRWrapper";
import ReactQuill from "react-quill";

const EditorComponent = () => {
  const quillInstance = useRef<ReactQuill>(null);
  const [contents, setContents] = useState("null");
  const modules = useMemo(
    () => ({
      toolbar: [
        [{ header: [1, 2, false] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [
          { list: "ordered" },
          { list: "bullet" },
          { indent: "-1" },
          { indent: "+1" },
        ],
        ["link", "image"],
        ["clean"],
      ],
      imageCompress: {
        quality: 0.7,
        maxWidth: 222,
        maxHeight: 222,
        debug: true,
        suppressErrorLogging: false,
        insertIntoEditor: undefined,
      },
    }),
    []
  );
  return (
    <div className="w-full">
      <QuillNoSSRWrapper
        forwardedRef={quillInstance}
        value={contents}
        onChange={setContents}
        modules={modules}
        theme="snow"
        placeholder="내용을 입력해주세요."
        className="h-[500px]"
      />
    </div>
  );
};

export default EditorComponent;
