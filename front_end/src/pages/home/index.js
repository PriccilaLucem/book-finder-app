import { useNavigate } from "react-router-dom";
import { Button, ButtonSection, Header } from "./styles";

const Home = () => {
  const navigate = useNavigate();

  return (
    <main>
      <Header>
        <h1>Book Finder App</h1>
      </Header>
      <ButtonSection>
        <Button onClick={() => navigate("/book")}>Search books</Button>
        <Button onClick={() => navigate("/book/register")}>
          Register Book
        </Button>
      </ButtonSection>
    </main>
  );
};

export default Home;
