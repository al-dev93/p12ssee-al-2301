import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getFrenchKindName } from "../../utils/getFrenchKindName";
import getSessionsWithDay from "../../utils/getSessionsWithDay";
import users from "../../utils/getUsers";

/**
 * @description hook for fetch data from the api format it and return it
 * @param {string} userId
 * @returns object - data used for render graphs and cards
 */
const useFetchData = (userId) => {
  const locate = useLocation().pathname;
  // stored fetc data
  const [userData, setUserData] = useState(null);
  const [userActivity, setUserActivity] = useState(null);
  const [userSessions, setUserSessions] = useState(null);
  const [userTodayScore, setUserTodayScore] = useState(null);
  const [dataPerformance, setDataPerformance] = useState(null);
  const [userKeyData, setUserKeyData] = useState(null);

  useEffect(() => {
    /**
     * autorun callback to fetch endpoint data
     */
    (function fetchData() {
      if (userId) {
        fetch(`http://localhost:4000/user/${userId}`)
          .then((response) => response.json())
          .then((response) => {
            const { data } = response;
            setUserData(data.userInfos);
            setUserTodayScore([{ score: data.score || data.todayScore }]);
            setUserKeyData(data.keyData);
          });
        fetch(`http://localhost:4000/user/${userId}/activity`)
          .then((response) => response.json())
          .then((response) => {
            const { sessions } = response.data;
            setUserActivity(sessions);
          });
        fetch(`http://localhost:4000/user/${userId}/average-sessions`)
          .then((response) => response.json())
          .then((response) => {
            const { sessions } = response.data;
            setUserSessions(sessions);
          });
        fetch(`http://localhost:4000/user/${userId}/performance`)
          .then((response) => response.json())
          .then((response) => {
            const { kind, data } = response.data;
            setDataPerformance({ kind, data });
          });
      } else {
        // for home page
        const response = [];
        users.forEach(async (id, index, arr) => {
          const { data } = await (
            await fetch(`http://localhost:4000/user/${id}`)
          ).json();
          response.push({
            id: data.id,
            firstName: data.userInfos.firstName,
            lastName: data.userInfos.lastName,
          });
          if (response.length === arr.length) setUserData(response);
        });
      }
    })();
  }, [locate]);

  if (userId) {
    // for profil page
    const userAverageSessions =
      userActivity && userSessions
        ? getSessionsWithDay(userActivity, userSessions) // add first letter of day
        : null;
    const userPerformance =
      dataPerformance && getFrenchKindName(dataPerformance); // add performance kind in french
    return {
      userData,
      userActivity,
      userAverageSessions,
      userTodayScore,
      userPerformance,
      userKeyData,
    };
  }
  return { userData };
};

export default useFetchData;
