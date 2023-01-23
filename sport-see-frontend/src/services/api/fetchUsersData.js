const url =
  "//127.0.0.1/private/p12ssee-al-2301/sport-see-frontend/src/services/mock/users.json";

const fetchUsersData = async (setUsersData) => {
  const response = await (await fetch(url)).json();
  setUsersData(response.data);
};

export default fetchUsersData;
