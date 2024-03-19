import React from "react";
import { ConnectButton } from "web3uikit";

const Header = () => {
  return (
    <div>
      <h1>Welcome to Decentralized lottery!</h1>
      <ConnectButton moralisAuth={false} />
    </div>
  );
};

export default Header;
