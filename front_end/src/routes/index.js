import { Route, Routes } from "react-router-dom";
import BookPage from "../pages/book";
import Home from "../pages/home";
import RegisterBook from "../pages/registerBook";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home> </Home>}></Route>;
      <Route path="/book" element={<BookPage> </BookPage>}></Route>;
      <Route
        path="/book/register"
        element={<RegisterBook> </RegisterBook>}
      ></Route>
      ;
    </Routes>
  );
};

export default AppRoutes;
