import "../../styles/layout/Fill.scss";
import GetAvatar from "./imageComponent/GetAvatar";
import Input from "./Input";

const Fill = (props) => {
  return (
    <div className="form js_collapsible">
      <Input
        labelText="Nombre completo"
        inputId="name"
        inputType="text"
        handleInput={props.handleInput}
        inputPlaceholder="Ej:Mari Puri López"
        required={true}
        data={props.data.name}
      />

      <Input
        labelText="Puesto"
        inputId="job"
        inputType="text"
        handleInput={props.handleInput}
        inputPlaceholder="Ej:Master and Commander"
        required={true}
        data={props.data.job}
      />

      <GetAvatar avatar={props.data.photo} updateAvatar={props.handleInput} />

      <Input
        labelText="Email"
        inputId="email"
        inputType="email"
        handleInput={props.handleInput}
        inputPlaceholder="Ej:maripuri@lamaster.com"
        required={true}
        data={props.data.email}
      />
      <Input
        labelText="Teléfono"
        inputId="phone"
        inputType="tel"
        handleInput={props.handleInput}
        inputPlaceholder="Ej:+34 611661234"
        required={false}
        data={props.data.phone}
      />

      <Input
        labelText="LinkedIn"
        inputId="linkedin"
        inputType="text"
        handleInput={props.handleInput}
        inputPlaceholder="Ej:lamari.master"
        required={false}
        data={props.data.linkedin}
      />

      <Input
        labelText="github"
        inputId="github"
        inputType="text"
        handleInput={props.handleInput}
        inputPlaceholder="Ej:@lamari"
        required={false}
        data={props.data.github}
      />
    </div>
  );
};

export default Fill;
