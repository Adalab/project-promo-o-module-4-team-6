import React from "react";
import PropTypes from "prop-types";
import defaultAvatar from "../../../images/no-me-entero-de-nada.jpg";
import "../../../styles/layout/Fill.scss";

function GetAvatar(props) {
  const fr = new FileReader();

  const myFileField = React.createRef();

  const uploadImage = (ev) => {
    if (ev.currentTarget.files.length > 0) {
      const myFile = ev.currentTarget.files[0];
      fr.addEventListener("load", getImage);
      fr.readAsDataURL(myFile);
    }
  };

  const getImage = () => {
    const image = fr.result;
    props.updateAvatar("photo", image);
  };

  const avatar = props.avatar === "" ? defaultAvatar : props.avatar;
  return (
    <>
      <p className="form__label">Imagen de perfil</p>
      <div className="form__label--wrapper">
        <label htmlFor="photo" className="button">
          Añadir imagen
        </label>
        <div
          className="imgPreview js__profile-preview get-avatar__preview"
          style={{ backgroundImage: `url(${avatar})` }}
        ></div>
      </div>
      <input
        type="file"
        className="hidden js__profile-upload-btn input"
        ref={myFileField}
        onChange={uploadImage}
        name="photo"
        id="photo"
      />
    </>
  );
}

GetAvatar.propTypes = {
  avatar: PropTypes.string.isRequired,
  updateAvatar: PropTypes.func.isRequired,
};

export default GetAvatar;
