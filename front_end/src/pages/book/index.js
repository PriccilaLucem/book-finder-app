import axios from "axios";
import { useState } from "react";
import {
  Book,
  BookSection,
  Button,
  Categories,
  Error,
  Input,
  SearchDiv,
  SearchSection,
} from "./styles";
import { AiFillHome } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const BookPage = () => {
  const navigate = useNavigate();

  const [book_name, setBookName] = useState("");
  const [writer, setWriter] = useState("");
  const [categories, setCategories] = useState("");
  const [books, setBooks] = useState([]);
  const [exists, setExists] = useState(true);

  const updateUrl = () => {
    const params = {
      book_name: book_name,
      writer: writer,
      categories: categories.split(" ").join(","),
    };

    let newUrl = "http://127.0.0.1:5000/books?";
    for (let key in params) {
      if (params[key]) {
        newUrl = newUrl.concat(`&${key}=${params[key]}`);
      }
    }
    axios.get(newUrl).then((data) => {
      setBooks(data.data);
      if (data.data[0]) {
        setExists(true);
      } else {
        setExists(false);
      }
    });
  };

  return (
    <main>
      <header>
        <AiFillHome
          onClick={() => navigate("/")}
          style={{ width: "50px", height: "50px", cursor: "pointer" }}
        ></AiFillHome>
      </header>
      <SearchSection>
        <SearchDiv>
          <Input
            type={"text"}
            placeholder={"Book name"}
            onChange={(e) => setBookName(e.target.value)}
          ></Input>
          <Input
            type={"text"}
            placeholder={"Book writer"}
            onChange={(e) => setWriter(e.target.value)}
          ></Input>
          <Input
            type={"text"}
            placeholder={"Book categories"}
            onChange={(e) => setCategories(e.target.value)}
          ></Input>
        </SearchDiv>

        <Button type="button" onClick={(e) => updateUrl()}>
          Procurar
        </Button>
      </SearchSection>
      {exists ? (
        <BookSection>
          {books.map((value) => (
            <Book key={value.id}>
              <div>Book Name: {value.book_name}</div>
              <div>Writer: {value.writer}</div>
              <div>Synopsis: {value.synopsis}</div>
              <Categories>
                Categories:
                {value.categories.map((categories) => (
                  <div key={categories.id}>{categories.category_name}</div>
                ))}
              </Categories>
            </Book>
          ))}
        </BookSection>
      ) : (
        <BookSection>
          <Error>Books Not Found</Error>
        </BookSection>
      )}
    </main>
  );
};

export default BookPage;
