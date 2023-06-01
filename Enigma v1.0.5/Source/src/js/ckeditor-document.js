import DocumentEditor from "@ckeditor/ckeditor5-build-decoupled-document";

$(".editor").each(function () {
    const el = this;
    DocumentEditor.create($(el).find(".document-editor__editable")[0])
        .then((editor) => {
            $(el)
                .closest(".editor")
                .find(".document-editor__toolbar")
                .append(editor.ui.view.toolbar.element);
        })
        .catch((error) => {
            console.error(error);
        });
});
