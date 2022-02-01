import "../../styles/layout/Share.scss";

const Share = (props) => {
  const handleClick = () => {
    console.log(props.data);
    props.postToApi(props.data, props.setCardUrl);
  };
  return (
    <div className="share__container js_collapsible">
      <button
        className="share__create_btn--off js_shareBtn"
        onClick={handleClick}
      >
        <i className="far fa-address-card"></i>
        Crear tarjeta
      </button>

      <section className="share__result ">
        <p className="share__result--title">La tarjeta ha sido creada:</p>
        <a
          href={props.cardUrl}
          className="share__result--link js_share_link"
          target="_blank"
        >
          {props.cardUrl}
        </a>

        <a
          href={`https://twitter.com/intent/tweet?text=%C2%A1Comparte%20esta%20tarjeta%20tan%20molona%21&url=${props.cardUrl}`}
          className="share__result--btn js-twitter"
          target="_blank "
        >
          <i className="fab fa-twitter"></i>
          <p>Compartir en twitter</p>
        </a>
      </section>
    </div>
  );
};

export default Share;
