import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const useFetchData = (url) => {
  const locate = useLocation().pathname;
  const [usersData, setUsersData] = useState(null);
  useEffect(() => {
    (async function fetchData() {
      // eslint-disable-next-line prefer-const
      let data = await (await fetch(url)).json();
      setUsersData(data.data);
    })();
  }, [url, locate]);
  return { usersData };
};

export default useFetchData;
