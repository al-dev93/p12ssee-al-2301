import propTypes from "prop-types";
import PictoButton from "../PictoButton";
import cardKeyData from "./style.module.css";

const unit = (button) => {
  return button.name === "Calories" ? "kCal" : "g";
};

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
