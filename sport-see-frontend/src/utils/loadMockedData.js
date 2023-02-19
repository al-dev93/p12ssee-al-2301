import users from "../services/mock/users.json";
import activity from "../services/mock/activity.json";
import session from "../services/mock/average-sessions.json";
import performance from "../services/mock/performance.json";
import getSessionsWithDay from "./getSessionsWithDay";
import { getFrenchKindName } from "./getFrenchKindName";
import getUserData from "./getUserData";

/**
 * @description Load mocked data from json files
 * @param {string} userId
 * @returns object
 */
function loadMockedData(userId) {
  // for the home page
  if (!userId)
    return {
      userData: users.data.map((item) => {
        return {
          id: item.id,
          firstName: item.userInfos.firstName,
          lastName: item.userInfos.lastName,
        };
      }),
    };
  // for the user page
  const userIdInfo = getUserData(users.data, userId);
  const userIdActivity = getUserData(activity.data, userId).sessions;
  const userIdSessions = getUserData(session.data, userId).sessions;
  const userIdPerformance = getUserData(performance.data, userId);
  return {
    userData: userIdInfo.userInfos,
    userTodayScore: [{ score: userIdInfo.score || userIdInfo.todayScore }],
    userKeyData: userIdInfo.keyData,
    userActivity: userIdActivity,
    userAverageSessions: getSessionsWithDay(userIdActivity, userIdSessions),
    userPerformance: getFrenchKindName(userIdPerformance),
  };
}

export default loadMockedData;
