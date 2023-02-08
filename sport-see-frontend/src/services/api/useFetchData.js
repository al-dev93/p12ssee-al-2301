import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getFrenchKindName } from "../../utils/getFrenchKindName";
import getSessionsWithDay from "../../utils/getSessionsWithDay";
import getUserData from "../../utils/getUserData";

const useFetchData = (url, userId) => {
  const locate = useLocation().pathname;
  const [userData, setUserData] = useState(null);
  const [userActivity, setUserActivity] = useState(null);
  const [userSessions, setUserSessions] = useState(null);
  const [userTodayScore, setUserTodayScore] = useState(null);
  const [dataPerformance, setDataPerformance] = useState(null);
  const [userKeyData, setUserKeyData] = useState(null);

  useEffect(() => {
    (async function fetchData() {
      if (userId) {
        fetch(url.userData)
          .then((response) => response.json())
          .then((response) => {
            const data = getUserData(response.data, userId);
            const score = Object.prototype.hasOwnProperty.call(
              data,
              "todayScore"
            )
              ? data.todayScore
              : data.score;
            setUserData(data.userInfos);
            setUserTodayScore(score);
            setUserKeyData(data.keyData);
          });
        fetch(url.userActivity)
          .then((response) => response.json())
          .then((response) => {
            const { sessions } = getUserData(response.data, userId);
            setUserActivity(sessions);
          });
        fetch(url.userAverageSessions)
          .then((response) => response.json())
          .then(async (response) => {
            const { sessions } = getUserData(response.data, userId);
            setUserSessions(sessions);
          });
        fetch(url.userPerformance)
          .then((response) => response.json())
          .then((response) => {
            const { kind, data } = getUserData(response.data, userId);
            setDataPerformance({ kind, data });
          });
      } else {
        const { data } = await (await fetch(url)).json();
        setUserData(data);
      }
    })();
  }, [url, locate]);

  if (userId) {
    const userAverageSessions =
      userActivity && userSessions
        ? getSessionsWithDay(userActivity, userSessions)
        : null;
    const userPerformance =
      dataPerformance && getFrenchKindName(dataPerformance);
    return {
      userData,
      userActivity,
      userAverageSessions,
      userTodayScore,
      userPerformance,
      userKeyData,
    };
  }
  const users =
    userData &&
    userData.map((item) => {
      return {
        id: item.id,
        firstName: item.userInfos.firstName,
        lastName: item.userInfos.lastName,
      };
    });
  return { users };
};

export default useFetchData;
