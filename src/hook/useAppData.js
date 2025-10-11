import axios from "axios";
import { useEffect, useState } from "react";

const useAppData = () => {
  const [appData, setAppData] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  const [loadingError, setLoadingError] = useState(null);

  useEffect(() => {
    setLoadingData(true);
    axios("../mobapps.json")
      .then((data) => setAppData(data.data))
      .catch((err) => setLoadingError(err))
      .finally(() => setLoadingData(false));
  }, []);

  return{appData, loadingData, loadingError};
};

export default useAppData;
