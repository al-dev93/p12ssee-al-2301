import relaxation from "../assets/icons/relaxation-icon.svg";
import swimming from "../assets/icons/swimming-icon.svg";
import cycling from "../assets/icons/cycling-icon.svg";
import weight from "../assets/icons/weight-icon.svg";
import calorie from "../assets/icons/calorie-icon.svg";
import carb from "../assets/icons/carb-icon.svg";
import lipid from "../assets/icons/lipid-icon.svg";
import protein from "../assets/icons/protein-icon.svg";

/**
 * List of pictograms used for nav and card buttons
 */
const pictoButtonList = {
  navButton: [
    {
      name: "relaxation",
      icon: relaxation,
    },
    {
      name: "swimming",
      icon: swimming,
    },
    {
      name: "cycling",
      icon: cycling,
    },
    {
      name: "weight",
      icon: weight,
    },
  ],
  cardButton: [
    {
      name: "Calories",
      icon: calorie,
      color: "cardButtonBackgroundCalorie",
    },
    {
      name: "Protéines",
      icon: protein,
      color: "cardButtonBackgroundProtein",
    },
    {
      name: "Glucides",
      icon: carb,
      color: "cardButtonBackgroundCarb",
    },
    {
      name: "Lipides",
      icon: lipid,
      color: "cardButtonBackgroundLipid",
    },
  ],
};

export default pictoButtonList;
