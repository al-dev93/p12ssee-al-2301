import "./style.css";
import { useParams } from "react-router-dom";
import { USER_MAIN_DATA } from "../../utils/urlMockData";
import useFetchData from "../../services/api/useFetchData";

const Profil = () => {
  const { userId } = useParams();
  const { userInfo } = useFetchData(USER_MAIN_DATA, userId);
  // eslint-disable-next-line no-console
  console.log(userInfo);

  return (
    <div className="profilWrapper">
      <header>
        <h1>
          Bonjour <strong>{userInfo && userInfo.firstName}</strong>
        </h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </header>
    </div>
  );
};

export default Profil;
