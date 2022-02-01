const postToApi = (userData, setUrl) => {
  console.log("holis");
  fetch("https://awesome-profile-cards.herokuapp.com/card", {
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
