import { useEffect } from "react"
import axios from "../components/service/api";

const Teachers = () => {

  const [data, setdata] = useState([]);

  useEffect(() => {
    try {
      const response = axios
        .get("/Student")
        .then((e) => setdata(e.data))
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  }, []);


  return (
    <>
    <SearchHeaders />
    <Tables dataBody={data} />
    </>
  );
};

export default Teachers