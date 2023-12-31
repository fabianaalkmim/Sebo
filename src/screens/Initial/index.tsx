import React from "react";
import { Linking, Text } from "react-native";
import ButtonPrimary from "../../components/Forms/ButtonPrimary";
import ButtonSecundary from "../../components/Forms/ButtonSecundary";
import Spacer from "../../components/Spacer";
import { LogoContainer, Title, ViewContainer } from "../../ui/style/style";
import { Header, SubTitle } from "./style";

function Initial({ navigation }) {
  return (
    <ViewContainer>
      <Header>
        <LogoContainer style={{width: 150, height: 210}} source={require('../../assets/sebo-logo-initial.png')}></LogoContainer>
      </Header>

      <Title>Boas-vindas ao Sebo!</Title>
      <Spacer margin={"mx"} />
      <Spacer margin={"mx"} />

      <ButtonPrimary title="Fazer Login" onPress={() => navigation.navigate('Login')} />
      <Spacer margin={"mx"} />

      <ButtonSecundary title="Cadastre-se"  onPress={() => navigation.navigate('Cadastre-se')} />
      <Spacer margin={"mx"} />
    </ViewContainer>
  );
}

export default Initial;
