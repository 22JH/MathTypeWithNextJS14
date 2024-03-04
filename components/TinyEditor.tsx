"use client";

import { Editor } from "@tinymce/tinymce-react";
import { TinyEditorType } from "@/types/TinyEditorType";
import { useRef } from "react";

export default function TinyEditor() {
  const editorRef = useRef<null | TinyEditorType>(null);
  const tinymcePlugins = ["link", "lists", "autoresize"];
  const tinymceToolbar =
    "blocks fontfamily |" +
    "bold italic underline strikethrough forecolor backcolor |" +
    "alignleft aligncenter alignright alignjustify |" +
    "bullist numlist blockquote link |" +
    "tiny_mce_wiris_formulaEditor tiny_mce_wiris_formulaEditorChemistry";

  return (
    <section>
      <Editor
        id="tinyEditor"
        apiKey="xkckquh7dxyvyh4deiimivrbrvz98vojtsyscygzh71ecf60"
        /** https://www.tiny.cloud/ 에서 발급받은 api키 */
        onInit={(_, editor: TinyEditorType) => {
          editorRef.current = editor;
          /**
           * 에디터의 내용을 가져오려면
           * editor.getContent 도는
           * editorRef.current.getContent()
           */
        }}
        init={{
          placeholder: "내용을 입력해 주세요",
          external_plugins: {
            tiny_mce_wiris:
              "https://www.wiris.net/demo/plugins/tiny_mce/plugin.js",
          },
          plugins: tinymcePlugins,
          toolbar: tinymceToolbar,
          width: "100%",
          min_height: 500,
          min_width: 375,
          menubar: false,
          branding: false,
          statusbar: false,
          block_formats: "제목1=h2;제목2=h3;제목3=h4;본문=p;",
          content_style: "body { background-color: rgb(245,245,245) }",
        }}
      />
    </section>
  );
}
