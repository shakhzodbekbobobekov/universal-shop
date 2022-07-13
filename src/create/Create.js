import "./Create.css";
import { useEffect, useState } from "react";
import { useFetch } from "../components/hooks/useFetch";
import { useNavigate } from "react-router-dom";

function Create() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [category, setCategory] = useState("");
  const [thumbnail, setThumbnail] = useState("");

  const { data, isPending, error, postData } = useFetch(
    "http://localhost:3000/products",
    "POST"
  );

  const handleForm = (e) => {
    e.preventDefault();
    postData({
      title,
      description,
      price,
      discountPercentage: discount,
      thumbnail,
      category,
    });
    console.log({
      title,
      description,
      price,
      discountPercentage: discount,
      thumbnail,
    });
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (data && data.title === title) {
      navigate("/");
    }
  }, [data, navigate, title]);

  return (
    <form className="create" onSubmit={handleForm}>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      <label>
        <span>Title</span>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          required
        />
      </label>

      <label>
        <span>Description:</span>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          required
        ></textarea>
      </label>

      <label>
        <span>Category:</span>
        <textarea
          onChange={(e) => setCategory(e.target.value)}
          value={category}
          required
        ></textarea>
      </label>

      <label>
        <span>Price:</span>
        <input
          type="number"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
          required
        />
      </label>
      <label>
        <span>Discount:</span>
        <input
          type="number"
          onChange={(e) => setDiscount(e.target.value)}
          value={discount}
          required
        />
      </label>
      <label>
        <span>Images:</span>
        <input
          type="text"
          onChange={(e) => setThumbnail(e.target.value)}
          value={thumbnail}
          required
        />
      </label>
      <button>Submit</button>
    </form>
  );
}

export default Create;
