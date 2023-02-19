import propTypes from "prop-types";
import PictoButton from "../PictoButton";
import cardKeyData from "./style.module.css";

/**
 * @description get unit of the value in card
 * @param {object} button
 * @returns string
 */
const unit = (button) => {
  return button.name === "Calories" ? "kCal" : "g";
};
/**
 * @description get the value in card according to the name button
 * @param {object} data
 * @param {object} button
 * @returns number
 */
const selectedData = (data, button) => {
  switch (button.name) {
    case "Calories":
      return data.calorieCount;
    case "Protéines":
      return data.proteinCount;
    case "Glucides":
      return data.carbohydrateCount;
    case "Lipides":
      return data.lipidCount;
    default:
      break;
  }
  return null;
};
/**
 * @description card component
 * @param {object} data
 * @param {object} button
 * @returns render card key data
 */
const CardKeyData = ({ data, button }) => {
  return (
    <section className={cardKeyData.wrapper}>
      <div className={cardKeyData.cardWrapper}>
        <PictoButton picto={button} />
        <div className={cardKeyData.cardBody}>
          <p className={cardKeyData.cardText}>{`${selectedData(
            data,
            button
          )}${unit(button)}`}</p>
          <h2 className={cardKeyData.cardTitle}>{button.name}</h2>
        </div>
      </div>
    </section>
  );
};

export default CardKeyData;

CardKeyData.propTypes = {
  data: propTypes.objectOf(propTypes.number).isRequired,
  button: propTypes.objectOf(propTypes.string).isRequired,
};
