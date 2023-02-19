import propTypes from "prop-types";
import pictoButton from "./style.module.css";

/**
 * @description picto button component
 * @param {object} picto
 * @returns render button with en=mbedded icon
 */
const PictoButton = ({ picto }) => (
  <div
    className={`${pictoButton.wrapper} ${
      // size for picto card or nav bar
      picto.color ? pictoButton.cardButtonSize : pictoButton.navButtonSize
    } ${
      // color for picto card or nav bar
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
