export const getPageTitle = (pageContext: {
  exports: { documentProps?: { title: string } };
  documentProps?: { title: string };
}) => {
  const title =
    (pageContext.exports.documentProps || {}).title ||
    (pageContext.documentProps || {}).title ||
    "第58回鈴鹿高専祭";
  return title;
};
