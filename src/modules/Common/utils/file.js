export const randomFileName = (originalName) => {
  const index = originalName.lastIndexOf('.');
  const ext = originalName.slice(index);
  const originalNameWithoutExt = originalName.slice(0, index);
  return `${originalNameWithoutExt}_${Math.floor(Date.now() / 1000)}${ext}`;
};
