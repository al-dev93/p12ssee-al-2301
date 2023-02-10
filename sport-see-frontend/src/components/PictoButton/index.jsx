import propTypes from "prop-types";
import pictoButton from "./style.module.css";

const PictoButton = ({ picto }) => (
  <div
    className={`${pictoButton.wrapper} ${
      picto.color ? pictoButton.cardButtonSize : pictoButton.navButtonSize
    } ${
      picto.color ? pictoButton[picto.color] : pictoButton.navButtonBackground
    }`}
  >
    <img src={picto.icon} alt="" />
  </div>
);

export default PictoButton;

PictoButton.propTypes = {
  picto: propTypes.shape({
    name: propTypes.string,
    icon: propTypes.node,
    color: propTypes.string,
  }).isRequired,
};
