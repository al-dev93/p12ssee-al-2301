const frenchKind = {
  intensity: "Intensité",
  speed: "Vitesse",
  strength: "Force",
  endurance: "Endurance",
  energy: "Energie",
  cardio: "Cardio",
};

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
