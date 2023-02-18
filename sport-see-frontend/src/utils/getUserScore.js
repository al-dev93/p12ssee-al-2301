function getUserScore(data) {
  return Object.prototype.hasOwnProperty.call(data, "todayScore")
    ? data.todayScore
    : data.score;
}

export default getUserScore;
