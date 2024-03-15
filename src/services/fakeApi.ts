/**
 * Fake API Mock by Eugene
 * @param result T as result
 * @param delay duration of the delay
 * @param isRejected if true, reject the promise
 * @param error the error object, to return
 * @returns T
 */
export const fakeApi = <T>(
  result: T = {} as T,
  delay: number = 1000,
  isRejected: boolean = false,
  error?: any,
) =>
  new Promise<T>((resolve, reject) => {
    setTimeout(() => {
      if (isRejected) {
        reject(error);
      }
      resolve(result);
    }, delay);
  });
