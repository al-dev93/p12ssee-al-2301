import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import getUserData from "../../utils/getUserData";

const useFetchData = (url, userId) => {
  const locate = useLocation().pathname;
  const [userData, setUserData] = useState(null);
  const [userActivity, setUserActivity] = useState(null);
  const [userAverageSessions, setUserAverageSessions] = useState(null);
  const [userTodayScore, setUserTodayScore] = useState(null);

  useEffect(() => {
    (async function fetchData() {
      if (userId) {
        fetch(url.userData)
          .then((response) => response.json())
          .then((response) => {
            const data = getUserData(response.data, userId);
            setUserData(data.userInfos);
            setUserTodayScore(data.todayScore);
          });
        fetch(url.userActivity)
          .then((response) => response.json())
          .then((response) => {
            const data = getUserData(response.data, userId);
            setUserActivity(data.sessions);
          });
        fetch(url.userAverageSessions)
          .then((response) => response.json())
          .then((response) => {
            const data = getUserData(response.data, userId);
            setUserAverageSessions(data.sessions);
          });
      } else {
        const data = await (await fetch(url)).json();
        setUserData(data.data);
      }
    })();
  }, [url, locate]);

  if (userId) {
    return { userData, userActivity, userAverageSessions, userTodayScore };
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
