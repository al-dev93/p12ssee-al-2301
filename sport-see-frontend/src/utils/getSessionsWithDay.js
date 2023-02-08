function getSessionsWithDay(activity, sessions) {
  const firstDayChar = ["D", "L", "M", "M", "J", "V", "S"];
  return activity.map((session, index) => {
    return {
      ...sessions[index],
      sessionDay: firstDayChar[new Date(session.day).getDay()],
    };
  });
}

export default getSessionsWithDay;
