const EXPRESS_SERVER = `http://localhost:4000/card`;

const postToApi = (userData, setUrl) => {
  fetch(EXPRESS_SERVER, {
    method: "POST",
    body: JSON.stringify(userData),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        setUrl(data.cardURL);
        // twitterBtn.href = `https://twitter.com/intent/tweet?text=Esta es mi tarjeta de Awesome Cards&url=${data.cardURL}`;
      }
    })
    .catch((error) => console.error(error));
};


export default postToApi;
