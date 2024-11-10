const createPromise = (data: string): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    if (data) {
      resolve(data);
    } else {
      reject("Something went wrong!");
    }
  });
};

const showData = async (): Promise<string> => {
  const promiseResult: string = await createPromise("Hello World!");
  return promiseResult;
};

console.log(showData());
