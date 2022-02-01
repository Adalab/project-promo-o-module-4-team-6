const Input = (props) => {
  const handleInput = (ev) => {
    const inputValue = ev.currentTarget.value;
    const inputId = ev.currentTarget.id;
    props.handleInput(inputId, inputValue);
  };

  return (
    <>
      <label className="form__label" htmlFor={props.inputId}>
        {props.labelText}
      </label>
      <input
        onChange={handleInput}
        className="input form__label--input js-form__input--name"
        placeholder={props.inputPlaceholder}
        type={props.inputType}
        id={props.inputId}
        name={props.inputId}
        value={props.data}
        required
      />
    </>
  );
};

export default Input;
