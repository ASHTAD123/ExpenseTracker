export const getResponseError = (response) => {
  if (response === null || response === undefined) {
    return null;
  }

  if (response) {
    const errData = {
      value: "",
    };

    for (let key in response.data) {
      if (response.data.hasOwnProperty(key)) {
        errData.key = response.data;
      }
    }
    return errData;
  }
};
