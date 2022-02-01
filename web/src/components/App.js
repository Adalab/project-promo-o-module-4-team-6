import ls from "../services/localStorage";
import "../styles/App.scss";
import Header from "./Header";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import Preview from "./preview/Preview";
import Form from "./form/Form";
import postToApi from "../services/postToApi";
//Recordar styles que sacamos de html

function App() {
  const [data, setData] = useState(
    ls.get(
      "data",
      {
        palette: "1",
        name: "",
        job: "",
        phone: "",
        email: "",
        linkedin: "",
        github: "",
        photo: "",
      } || ""
    )
  );
  const [cardUrl, setCardUrl] = useState("");

  useEffect(() => {
    ls.set("data", data);
  }, [data]);

  const [collapsables, setCollapsabes] = useState({
    designCollapsable: false,
    fillCollapsable: true,
    shareCollapsable: true,
  });

  const handleInput = (inputChanged, value) => {
    setData({ ...data, [inputChanged]: value });
  };

  const handleClickReset = () => {
    setData({
      palette: "1",
      name: "",
      job: "",
      email: "",
      phone: "",
      linkedin: "",
      github: "",
      photo: "",
    });
  };
  //no funciona, falta repasarlo, pregunar en tutoria
  const handleCollapsables = (fieldsetId) => {
    setCollapsabes({
      ...collapsables,
      [fieldsetId]: !collapsables[fieldsetId],
    });
  };

  return (
    <div>
      <Header />
      <main className="main">
        <Preview data={data} handleClickReset={handleClickReset} />
        <Form
          data={data}
          collapsables={collapsables}
          handleCollapsables={handleCollapsables}
          handleInput={handleInput}
          postToApi={postToApi}
          cardUrl={cardUrl}
          setCardUrl={setCardUrl}
        />
      </main>

      <Footer />
    </div>
  );
}

export default App;
