import axios from "axios";
import { useEffect, useState } from "react";

const useAppData = () => {
  const [appData, setAppData] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  const [loadingError, setLoadingError] = useState(null);

  useEffect(() => {
    setLoadingData(true);
    axios("https://raw.githubusercontent.com/mhasantushar/w3educ-bin/refs/heads/main/json/w3ssmnt-phero-react-heroio-b12a08/mobapps-unique.json")
      .then((data) => setAppData(data.data))
      .catch((err) => setLoadingError(err))
      .finally(() => setLoadingData(false));
  }, []);

  return{appData, loadingData, loadingError};
};

export default useAppData;
