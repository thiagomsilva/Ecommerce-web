import React from 'react';
import withAuthAdmin from '@/components/withAuthAdmin';

const Home: React.FC = () => {
  return <h1>Parabens, vc acessou o painel admin!</h1>;
}

export default withAuthAdmin(Home);