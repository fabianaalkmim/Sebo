import React, { useState } from "react";
import ButtonPrimary from "../../components/Forms/ButtonPrimary";
import Input from "../../components/Forms/Input";
import Label from "../../components/Forms/Label";
import Spacer from "../../components/Spacer";
import { ViewContainer } from "../../ui/style/style";
import { postUsers } from "../../services/api";
import { Form, SubTitle } from "./style";
import { IUser } from "../../ui/interfaces";
import { checkEmail, checkName, checkPass } from "../../utils/validators";

function Register({ navigation }) {
  const [confirmPass, setConfirmPass] = useState<string>();
  const [user, setUser] = useState<IUser>({
    id: 0,
    name: "",
    email: "",
    password: "",
  });

  async function createUser() {
    if (user.email && user.name && user.password) {
      const response = await postUsers(user);

      if (response === "success post") {
        return navigation.navigate("Login");
      }

      alert(
        "Estamos com uma instabilidade, por favor, tente novamente mais tarde!"
      );
    }
    alert("Por favor, preencher todos os dados para efetuar cadastro.");
  }

  function submitForm() {
    if (checkName(user.name)) {
      if (checkEmail(user.email)) {
        if (checkPass(user.password, confirmPass)) {
          createUser();
        }
      }
    }
  }

  return (
    <ViewContainer>
      <Spacer margin={"sx"} />

      <Form>
        <Label title="Nome" />
        <Input
          placeholder="Nome"
          onChangeText={(ev) =>
            setUser((old) => {
              return { ...old, name: ev };
            })
          }
        />
        <Spacer margin="xx" />

        <Label title="E-mail" />
        <Input
          placeholder="E-mail"
          onChangeText={(ev) =>
            setUser((old) => {
              return { ...old, email: ev };
            })
          }
        />
        <Spacer margin="xx" />

        <Label title="Senha" />
        <Input
          placeholder="Senha"
          onChangeText={(ev) =>
            setUser((old) => {
              return { ...old, password: ev };
            })
          }
        />
        <Spacer margin="xx" />

        <Label title="Confirme a senha" />
        <Input placeholder="Confirme a senha" onChangeText={setConfirmPass} />
        <Spacer margin="xx" />

        <SubTitle>
          Sua senha deve conter: {"\n"} {"\n"}- Crie uma senha com no mínimo 8
          caracteres {"\n"}- Adicione letra minúsculas {"\n"}- Adicione pelo
          menos uma letra maiúscula {"\n"}- Adicione pelo menos um caractere
          especial
        </SubTitle>
        <Spacer margin="xx" />

        <ButtonPrimary title="Cadastrar" onPress={submitForm} />
      </Form>
      <Spacer margin={"xx"} />
    </ViewContainer>
  );
}

export default Register;
