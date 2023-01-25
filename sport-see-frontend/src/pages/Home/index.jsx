import "./style.css";
import { Link } from "react-router-dom";
import { USER_MAIN_DATA } from "../../utils/urlMockData";
import useFetchData from "../../services/api/useFetchData";

const Home = () => {
  const { users } = useFetchData(USER_MAIN_DATA);
  // eslint-disable-next-line no-console
  console.log(users);

  return (
    <div className="homeWrapper">
      <h1 className="homeTitle">utilisateurs enregistrés</h1>
      <ul className="usersList">
        {users &&
          users.map((user) => (
            <li key={user.id} className="itemUsersList">
              <Link className="linkToUser" to={`/profil/${user.id}`}>
                {user.firstName} {user.lastName}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Home;
