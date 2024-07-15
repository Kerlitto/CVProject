export const getImageUrl = (filename: string) => {
  return new URL(`/src/assets/listingsPhotos/${filename}`, import.meta.url)
    .href;
};
