import { useState } from "react";

import Design from "./Design";
import Fill from "./Fill";
import Share from "./Share";

const Form = (props) => {
  const [collapsables, setCollapsabes] = useState({
    designCollapsable: false,
    fillCollapsable: true,
    shareCollapsable: true,
  });

  const handleCollapsables = (ev) => {
    const fieldsetId = ev.currentTarget.id;
    setCollapsabes({
      ...collapsables,
      [fieldsetId]: !collapsables[fieldsetId],
    });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="dashboard js-reset" id="form">
      <fieldset
        className={`fieldset   ${
          collapsables.designCollapsable ? "collapse" : "rotateArrow"
        }`}
      >
        <legend
          onClick={handleCollapsables}
          id="designCollapsable"
          className="legend js_legendDesign"
          title="Pulsa para desplegar"
        >
          <div className={`legend__iconTitle`}>
            <div>
              <i className="far fa-object-ungroup item--icon"></i>
            </div>
            <h2 className="legend__iconTitle--mainTitle">Diseña</h2>
          </div>
          <div>
            <i className="fas fa-chevron-down"></i>
          </div>
        </legend>
        <Design
          data={props.data}
          handleInput={props.handleInput}
          collapsed={collapsables.designCollapsable}
        />
      </fieldset>

      <fieldset
        className={`fieldset ${
          collapsables.fillCollapsable ? "collapse" : "rotateArrow"
        }`}
      >
        <legend
          onClick={handleCollapsables}
          id="fillCollapsable"
          className="legend js_legendFill"
          title="Pulsa para desplegar"
        >
          <div className="legend__iconTitle">
            <div>
              <i className="far fa-keyboard item--icon"></i>
            </div>
            <h2 className="legend__iconTitle--mainTitle">Rellena</h2>
          </div>
          <div>
            <i className="fas fa-chevron-down"></i>
          </div>
        </legend>

        <Fill
          data={props.data}
          handleInput={props.handleInput}
          collapsed={collapsables.fillCollapsable}
        />
      </fieldset>

      <fieldset
        className={`share fieldset ${
          collapsables.shareCollapsable ? "collapse" : "rotateArrow"
        }`}
      >
        <legend
          onClick={handleCollapsables}
          id="shareCollapsable"
          className="legend js_legendShare"
          title="Pulsa para desplegar"
        >
          <div className="legend__iconTitle">
            <div>
              <i className="fas fa-share-alt item--icon"></i>
            </div>
            <h2 className="legend__iconTitle--mainTitle">Comparte</h2>
          </div>
          <div>
            <i className="fas fa-chevron-down"></i>
          </div>
        </legend>
        {/* style="color: #54585a" */}
        <Share
          postToApi={props.postToApi}
          cardUrl={props.cardUrl}
          data={props.data}
          setCardUrl={props.setCardUrl}
        />
      </fieldset>
    </form>
  );
};
export default Form;
