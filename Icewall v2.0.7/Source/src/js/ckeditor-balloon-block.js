import BalloonBlockEditor from "@ckeditor/ckeditor5-build-balloon-block";

$(".editor").each(function () {
    const el = this;
    BalloonBlockEditor.create(el).catch((error) => {
        console.error(error);
    });
});
