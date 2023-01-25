import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const useFetchData = (url, userId) => {
  const locate = useLocation().pathname;
  const [usersData, setUsersData] = useState(null);

  useEffect(() => {
    (async function fetchData() {
      // eslint-disable-next-line prefer-const
      let data = await (await fetch(url)).json();
      setUsersData(data.data);
    })();
  }, [url, locate]);

  if (userId && usersData) {
    const user = usersData.find((item) => `${item.id}` === userId).userInfos;
    return { user };
  }
  const users =
    usersData &&
    usersData.map((item) => {
      return {
        id: item.id,
        firstName: item.userInfos.firstName,
        lastName: item.userInfos.lastName,
      };
    });
  return { users };
};

export default useFetchData;
