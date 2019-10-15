import { ALL_PAGES } from "./constants";
import { FileIO } from "../src/helpers/fileIO";
import { pdfFactory } from "../src/Factory/pdfFactory";
const PdfToImageGenerator = function(pdfURL) {
  this.pdfURL = pdfURL;
};
PdfToImageGenerator.prototype.convert = async function(pageNumber = ALL_PAGES) {
  const fileIO = new FileIO(this.pdfURL);
  const dataURL = await fileIO.toDataURL();
  console.log("here is dataURL", dataURL);
  const PdfFactory = new pdfFactory(dataURL);
  const images = await PdfFactory.convert(pageNumber);
  console.log("here are images ", images);
  //   fileIO.toFile(undefined, "application/pdf").then(file => {
  //     const PdfFactory = new pdfFactory(file);
  //     PdfFactory.convert(pageNumber).then(images => {
  //       console.log(images);
  //     });
  //   });
};
window.PdfToImageGenerator = PdfToImageGenerator;
export default PdfToImageGenerator;
