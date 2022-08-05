const parseError = (error: any) =>
  error?.error || error?.message || error?.originalError || error;

const isNetworkError = (error: any) => {
  const networkErr = ["Network Error", "Error: Network Error"];
  return networkErr.includes(parseError(error));
};

export default {
  parseError,
  isNetworkError,
};
