import '../../styles/layout/Design.scss';

const Design = (props) => {
  const handleInput = (ev) => {
    const inputChanged = ev.currentTarget.name;
    const inputValue = ev.currentTarget.value;
    props.handleInput(inputChanged, inputValue);
  }

  return (<div className="design js_collapsible">
    <label className="design__label">Colores</label>
    <ul>
      <li className="color_blue">
        <input
          onChange={handleInput}
          className="radio js-radio js-palette-1 input"
          type="radio"
          value="1"
          id="color_blue"
          name="palette"
          checked={props.data.palette === '1'}
        />
        <div className="color_blue--dark"></div>
        <div className="color_blue--medium"></div>
        <div className="color_blue--light"></div>
      </li>
      <li className="color_red">
        <input
          onChange={handleInput}
          className="radio js-radio js-palette-2 input"
          type="radio"
          value="2"
          id="color_red"
          name="palette"
          checked={props.data.palette === '2'}
        />
        <div className="color_red--dark"></div>
        <div className="color_red--medium"></div>
        <div className="color_red--light"></div>
      </li>
      <li className="color_grey">
        <input
          onChange={handleInput}
          className="radio js-radio js-palette-3 input"
          type="radio"
          value="3"
          id="color_grey"
          name="palette"
          checked={props.data.palette === '3'}
        />
        <div className="color_grey--dark"></div>
        <div className="color_grey--medium"></div>
        <div className="color_grey--light"></div>
      </li>
    </ul>
  </div>
  )
}

export default Design;