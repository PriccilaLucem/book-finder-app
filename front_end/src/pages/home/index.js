import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const url = "http://127.0.0.1:5000/books";

  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);

  const searchBook = () => {
    axios.get(url + "?s=" + search).then((res) => setBooks(res));
    navigate(`?s=${search}`);
  };

  useEffect(() => {
    searchBook();
  }, [window.location.href]);
  return (
    <main>
      <header>
        <h1>Book_Finder_App</h1>
      </header>
      <section>
        <input
          type={"text"}
          placeholder={"Find your book here"}
          onChange={(e) => setSearch(e.target.value)}
        ></input>
        <button type="button" onClick={() => searchBook()}>
          Procurar
        </button>
      </section>
      <section>
        <div></div>
      </section>
    </main>
  );
};

export default Home;
