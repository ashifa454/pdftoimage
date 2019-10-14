import { RANDOM_FILE_NAME } from "../constants";
export const FileIO = function(dataURL) {
  this.dataURL = dataURL;
};
/**
 * @description Generate Buffer of a Source document
 */
FileIO.prototype.toBuffer = function() {
  return fetch(this.dataURL).then(res => res.arrayBuffer());
};
/**
 * @description Generate File of a Source Document
 */
FileIO.prototype.toFile = function(fileName = RANDOM_FILE_NAME()) {
  return fetch(this.dataURL)
    .then(res => res.arrayBuffer())
    .then(buf => new File([buf], fileName, { type: "image/png" }));
};
/**
 * @description Generate Stream of a Source Document
 */
FileIO.prototype.toStream = function() {};
/**
 * @description Read PDF Document from Buffer
 */
FileIO.prototype.fromBuffer = function() {};
/**
 * @description Read PDF Document from File
 */
FileIO.prototype.fromFile = function() {};
/**
 * @description Read PDF from Stream
 */
FileIO.prototype.fromStream = function() {};
