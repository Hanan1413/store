import React from "react";
import { Outlet } from "react-router-dom";
import {Header, Navbar} from "../components";

const HomeLayout = () => {
  return (
    <>
      <Header />
      <Navbar/>
      <section className="align-element py-5">
        <Outlet />
      </section>
    </>
  );
};

export default HomeLayout;
