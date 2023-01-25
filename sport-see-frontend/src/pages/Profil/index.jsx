import "./style.css";
import { useParams } from "react-router-dom";
import { USER_MAIN_DATA } from "../../utils/urlMockData";
import useFetchData from "../../services/api/useFetchData";

const Profil = () => {
  const { userId } = useParams();
  const { user } = useFetchData(USER_MAIN_DATA, userId);
  // eslint-disable-next-line no-console
  console.log(user);

  return (
    <div className="profilWrapper">
      <header>
        <h1>
          Bonjour <strong>{user && user.firstName}</strong>
        </h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </header>
    </div>
  );
};

export default Profil;
