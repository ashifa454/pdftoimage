import pdfjsLib from "pdfjs-dist";
import { FileIO } from "../helpers/fileIO";
import { ALL_PAGES } from "../constants";
export const pdfFactory = function(fileURL) {
  this.fileURL = fileURL;
};
pdfFactory.prototype.renderToCanvas = function(pageNumber) {
  return new Promise((resolve, reject) => {
    pdfjsLib.getDocument({ url: this.fileURL }).then(pdfDoc => {
      const totalPages = pdfDoc.numPages;
      if (pageNumber === ALL_PAGES) {
        pageNumber === totalPages;
      } else if (pageNumber > totalPages) {
        reject("pageNumber cannot be greater then totalPages");
      }
      for (let i = 0; i < pageNumber; i++) {
          new FileIO()
      }
    });
  });
};
