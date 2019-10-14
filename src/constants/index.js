export const ALL_PAGES = "ALL_PAGES";
/**
 * @description Randomly Generate File Name
 * credit https://gist.github.com/6174/6062387 @MelMacaluso
 *
 */
export const RANDOM_FILE_NAME = () => {
  return (
    Math.random()
      .toString(36)
      .substring(2, 6) +
    Math.random()
      .toString(36)
      .substring(2, 6)
  ).toUpperCase();
};
