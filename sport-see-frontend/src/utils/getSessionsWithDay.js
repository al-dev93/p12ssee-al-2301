/**
 * @description Add the first letter of the day
 * @param {object} activity
 * @param {object} sessions
 * @returns array of object
 */
function getSessionsWithDay(activity, sessions) {
  // first letter of the day
  const firstDayChar = ["D", "L", "M", "M", "J", "V", "S"];
  return activity.map((session, index) => {
    return {
      ...sessions[index],
      sessionDay: firstDayChar[new Date(session.day).getDay()],
    };
  });
}

export default getSessionsWithDay;
