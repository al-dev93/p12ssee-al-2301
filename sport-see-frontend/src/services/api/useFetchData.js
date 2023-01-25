import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const useFetchData = (url, userId) => {
  const locate = useLocation().pathname;
  const [usersData, setUsersData] = useState(null);
  let userInfo;

  useEffect(() => {
    (async function fetchData() {
      // eslint-disable-next-line prefer-const
      let data = await (await fetch(url)).json();
      setUsersData(data.data);
    })();
  }, [url, locate]);

  if (userId && usersData) {
    userInfo = usersData.find((item) => `${item.id}` === userId).userInfos;
  } else {
    userInfo =
      usersData &&
      usersData.map((item) => {
        return {
          id: item.id,
          firstName: item.userInfos.firstName,
          lastName: item.userInfos.lastName,
        };
      });
  }

  return { userInfo };
};

export default useFetchData;
