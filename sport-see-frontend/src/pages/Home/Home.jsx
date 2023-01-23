import { Link, useOutletContext } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const users = useOutletContext();
  return (
    <div className="homeWrapper">
      <h1 className="homeTitle">utilisateurs enregistrés</h1>
      <ul className="usersList">
        {users &&
          users.map((user) => (
            <li key={user.id} className="itemUsersList">
              <Link className="linkToUser" to="/">
                {user.userInfos.firstName} {user.userInfos.lastName}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Home;
