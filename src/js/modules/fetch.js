const sendRequest = async (url) => {
  let res;

  try {
    res = await (await fetch(url)).json();
  } catch (err) {
    console.log(err);
  }

  return res;
};

export default sendRequest;
