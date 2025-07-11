export const editorConfig = {
  removePlugins: [
    "Link",
    "UploadAdapter",
    "EasyImage ",
    "Image ",
    "ImageCaption ",
    "ImageStyle ",
    "ImageToolbar ",
    "ImageUpload ",
  ],
  toolbar: [
    "heading",
    "bold",
    "italic",
    "blockQuote",
    "indent",
    "outdent",
    "numberedList",
    "bulletedList",
    "insertTable",
    "tableColumn",
    "tableRow",
    "mergeTableCells",
    "selectAll",
    "undo",
    "redo",
  ],
  heading: {
    options: [
      { model: "paragraph", title: "Subtitulo", class: "ck-heading_paragraph" },
      {
        model: "heading2",
        view: "h2",
        title: "Subtitulo 1",
        class: "ck-heading_heading2",
      },
      {
        model: "heading3",
        view: "h3",
        title: "Subtitulo 2",
        class: "ck-heading_heading3",
      },
    ],
  },
};
