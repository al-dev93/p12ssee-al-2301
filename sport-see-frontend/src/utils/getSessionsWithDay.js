function getSessionsWithDay(activity, sessions) {
  const firstDayChar = ["D", "L", "M", "M", "J", "V", "S"];
  const sessionDay = activity.map((session, index) => {
    return {
      ...sessions[index],
      sessionDay: firstDayChar[new Date(session.day).getDay()],
    };
  });
  return sessionDay;
}

export default getSessionsWithDay;
