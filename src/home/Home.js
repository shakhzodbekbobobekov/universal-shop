import "./Home.css";
import { useFetch } from "../components/hooks/useFetch";
import RecipeList from "../components/RicipeList";
function Home({ url }) {
  const { data, isPending, error } = useFetch(url);
  console.log(data);
  return (
    <div className="home">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      <RecipeList data={data} />
    </div>
  );
}
export default Home;
