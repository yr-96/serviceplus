import router from ".";

export const toServiceDetail = (
  ip: string,
  appName: string,
  applicationPort: number | string
) => {
  router.push({
    path: "/serviceDetail",
    query: {
      ip,
      appName,
      applicationPort,
    },
  });
};
