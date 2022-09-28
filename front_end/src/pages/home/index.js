import { useNavigate } from "react-router-dom";
import { Button, ButtonSection, Header, LinkSection } from "./styles";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

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
      <LinkSection>
        <a href="https://www.linkedin.com/in/priccila-lucem/">
          <AiFillLinkedin
            style={{ color: "blue", width: "50px", height: "50px" }}
          ></AiFillLinkedin>
        </a>
        <a href="https://github.com/PriccilaLucem">
          <AiFillGithub
            style={{ color: "black", width: "50px", height: "50px" }}
          ></AiFillGithub>
        </a>
      </LinkSection>
    </main>
  );
};

export default Home;
