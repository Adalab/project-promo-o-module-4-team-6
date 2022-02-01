import "../../styles/layout/Preview.scss";
import Profile from "./Profile";

const Preview = (props) => {
  return (
    <section className="preview">
      <button
        onClick={props.handleClickReset}
        className="preview__btn js-resetBtn"
        type="reset"
        form="form"
      >
        <i className="far fa-trash-alt"></i>
        Reset
      </button>

      <article className={`preview__article palette-${props.data.palette}`}>
        <div className="preview__article--container">
          <div className="preview__article--rectangle js-rectangle"></div>
          <h2 className="preview__article--name js-preview__name">
            {props.data.name || "Nombre Completo"}
          </h2>
          <h3 className="preview__article--job js-preview__job">
            {props.data.job || "Front-end developer"}
          </h3>
        </div>

        <Profile avatar={props.data.photo} />

        <div className="container">
          <a
            className="js-preview__phone"
            href={`tel:${props.data.phone}`}
            alt="Ir a móvil"
            target="blank"
          >
            <div className="container-icon">
              <i className="fas fa-mobile-alt contact-icon"></i>
            </div>
          </a>
          <a
            className="js-preview__mail"
            href={`mailto:${props.data.email}`}
            alt="Ir a correo electronico"
            target="blank"
          >
            <div className="container-icon">
              <i className="far fa-envelope contact-icon"></i>
            </div>
          </a>
          <a
            className="js-preview__linkedin"
            href={`https://www.linkedin.com/${props.data.linkedin}`}
            alt="Ir a la página de Linkedin"
            target="blank"
          >
            <div className="container-icon">
              <i className="fab fa-linkedin-in contact-icon"></i>
            </div>
          </a>
          <a
            className="js-preview__github"
            href={`https://www.github.com/${props.data.github}`}
            alt="Ir a la página de GitHub"
            target="blank"
          >
            <div className="container-icon">
              <i className="fab fa-github-alt contact-icon"></i>
            </div>
          </a>
        </div>
      </article>
    </section>
  );
};
export default Preview;
