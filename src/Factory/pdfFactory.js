import pdfjsLib from "pdfjs-dist";
import { FileIO } from "../helpers/fileIO";
import { ALL_PAGES } from "../constants";
export const pdfFactory = function(fileURL) {
  this.fileURL = fileURL;
};
pdfFactory.prototype.convert = function(pageNumber) {
  return new Promise((resolve, reject) => {
    pdfjsLib.getDocument({ url: this.fileURL }).then(pdfDoc => {
      const totalPages = pdfDoc.numPages;
      if (pageNumber === ALL_PAGES) {
        pageNumber === totalPages;
      } else if (pageNumber > totalPages) {
        reject("pageNumber cannot be greater then totalPages");
      }
      for (let i = 0; i < pageNumber; i++) {
        rendertToCanvas(pdfDoc.getPage(i + 1));
      }
    });
  });
};
/**
 *
 * @param page
 */
async function rendertToCanvas(page) {
  const CANVAS = document.createElement("canvas");
  const CONTEXT = CANVAS.getContext("2d");
  const renderContext = {
    canvasContext: CONTEXT,
    viewport: page.getViewport()
  };
  await page.render(renderContext);
  const imageURL = CANVAS.toDataURL("image/png");
  return new FileIO(imageURL).toFile();
}
