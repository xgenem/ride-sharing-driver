export const fakeApi = <T>(
  result: T,
  delay: number,
  isRejected = false,
  error: any,
) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isRejected) {
        reject(error);
      }
      resolve(result);
    }, delay);
  });
};
