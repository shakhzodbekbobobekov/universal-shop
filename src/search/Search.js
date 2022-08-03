import { useLocation } from "react-router-dom";
import { useFetch } from "../components/hooks/useFetch";
import RicipeList from "../components/RicipeList";

function Search() {
  const useParams = useLocation().search;
  const useString = new URLSearchParams(useParams);
  const getParams = useString.get("q");
  const url = "http://localhost:3000/products?q=" + getParams;
  const { data } = useFetch(url);
  return (
    <div>
      <div className="page-title">
        Bu siz izlagan mahsulot turi: <i>{getParams}</i>
      </div>
      {data && <RicipeList data={data} />}
    </div>
  );
}
// git pull

export default Search;
