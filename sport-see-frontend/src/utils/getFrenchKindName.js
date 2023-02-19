// translation of performance kinds in french
const frenchKind = {
  intensity: "Intensité",
  speed: "Vitesse",
  strength: "Force",
  endurance: "Endurance",
  energy: "Energie",
  cardio: "Cardio",
};

/**
 * @description Add the name of kind performance in french
 * @param {object} performanceData
 * @returns array of object
 */
function getFrenchKindName(performanceData) {
  const { kind, data } = performanceData;
  return data.map((el) => {
    return {
      ...el,
      kindName: frenchKind[kind[`${el.kind}`]],
    };
  });
}

export { frenchKind, getFrenchKindName };
