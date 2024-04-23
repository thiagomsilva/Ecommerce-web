import React from "react";
import LoginForm from "@/components/LoginForm";
import MainComponent from "@/components/shared/MainComponent";

const Login: React.FC = () => {
  return (
    <MainComponent>
      <LoginForm titlePhrase="Acessar minha conta" buttonPhrase="ACESSAR" />
    </MainComponent>
  );
}

export default Login;