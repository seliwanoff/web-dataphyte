export const calculateMinutesToRead = (article: string): number => {
  const wordsPerMinute = 200; // Average reading speed
  const wordCount = article.trim().split(/\s+/).length; // Split the article into words
  const minutes = Math.ceil(wordCount / wordsPerMinute); // Calculate minutes (round up)
  return minutes;
};

export const getExcerpt = (article: string, wordLimit: number): string => {
  const words = article.trim().split(/\s+/);
  const limitedWords = words.slice(0, wordLimit);

  return limitedWords.join(" ");
};

export const fixLinkSlashes = (link: string): string => {
  return link.replace(/([^:])\/\//g, "$1/");
};
