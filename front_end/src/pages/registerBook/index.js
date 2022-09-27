import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { AiFillHome } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { Button, Error, Form, Input } from "./styles";
import axios from "axios";

const RegisterBook = () => {
  const navigate = useNavigate();

  const schema = yup.object().shape({
    book_name: yup.string().required(),
    writer: yup.string().required(),
    synopsis: yup.string().required(),
    categories: yup
      .mixed()
      .transform((value) => (!value ? undefined : value.split(" ")))
      .required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleForm = ({ book_name, writer, synopsis, categories }) => {
    const data = { book_name, writer, synopsis, categories };
    axios.post("http://127.0.0.1:5000/books", data);
  };

  return (
    <header>
      <AiFillHome
        onClick={() => navigate("/")}
        style={{ width: "50px", height: "50px", cursor: "pointer" }}
      ></AiFillHome>

      <section>
        <Form onSubmit={handleSubmit(handleForm)}>
          <Input
            {...register("book_name")}
            type={"text"}
            placeholder="Name"
          ></Input>
          {errors?.book_name && <Error>{errors.book_name.message}</Error>}
          <Input
            {...register("writer")}
            type={"text"}
            placeholder="Writer"
          ></Input>
          {errors?.writer && <Error>{errors.writer.message}</Error>}

          <Input
            {...register("synopsis")}
            type={"text"}
            placeholder="synopsis"
          ></Input>
          {errors?.synopsis && <Error>{errors.synopsis.message}</Error>}

          <Input
            type={"text"}
            {...register("categories")}
            placeholder="Categories"
          ></Input>
          {errors?.categories && <Error>{errors.categories.message}</Error>}

          <Button type="submit">Register book</Button>
        </Form>
      </section>
    </header>
  );
};

export default RegisterBook;
