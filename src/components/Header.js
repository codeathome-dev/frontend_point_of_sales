import React from "react";
import { Layout } from "antd";
const { Header } = Layout;
function Navbar() {
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
      </Header>
    </Layout>
  );
}

export default Navbar;
