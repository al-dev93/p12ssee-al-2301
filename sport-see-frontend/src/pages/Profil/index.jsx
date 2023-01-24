import "./style.css";
import { useParams } from "react-router-dom";
import { USER_MAIN_DATA } from "../../utils/urlMockData";
import useFetchData from "../../services/api/useFetchData";

const Profil = () => {
  const { userId } = useParams();
  const { usersData } = useFetchData(USER_MAIN_DATA);

  return (
    <div className="profilWrapper">
      <header>
        <h1>
          Bonjour{" "}
          <strong>
            {usersData &&
              usersData.find((user) => `${user.id}` === userId).userInfos
                .firstName}
          </strong>
        </h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </header>
    </div>
  );
};

export default Profil;
