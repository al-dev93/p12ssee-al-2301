import propTypes from "prop-types";
import pictoButton from "./PictoButton.module.css";

const PictoButton = ({ picto }) => (
  <div className={pictoButton.wrapper}>
    <img src={picto} alt="" />
  </div>
);

export default PictoButton;

PictoButton.propTypes = {
  picto: propTypes.node.isRequired,
};
