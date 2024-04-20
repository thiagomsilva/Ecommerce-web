import React from 'react';
import Header from '../Header/StorefrontHeader';
import Footer from '../Footer/StorefrontFooter';

type MainComponentProps = {
  children: React.ReactNode;
};

const MainComponent: React.FC<MainComponentProps> = ({ children }) => {
  return (
    <div className="d-flex flex-column sticky-footer-wrapper">
      <Header />

      <div className="container flex-fill">
        {children}
      </div>

      <Footer />
    </div>
  )
}

export default MainComponent;