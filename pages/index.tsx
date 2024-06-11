import React from "react";
import MainComponent from "@/components/shared/MainComponent";
import AdminComponent from "@/components/shared/AdminComponent";
import { useRouter } from "next/router";

const Home: React.FC = () => {
  const router = useRouter();

  return (
    <MainComponent>
      <button onClick={() => router.push("/Auth/Login")}>Login</button>
      <AdminComponent>
        <h1>Painel Admin</h1>
      </AdminComponent>
    </MainComponent>
  );
};

export default Home;
