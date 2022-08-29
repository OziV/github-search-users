import React, { useContext } from "react";
import Loader from "./Loader";
import { Info, Repos, User, Search, Navbar } from "../components";
import { GithubContext } from "../context/context";
const Dashboard = () => {
  const { isLoading } = useContext(GithubContext);

  if (isLoading) {
    return (
      <main>
        <Navbar />
        <Search />
        <Loader className="loading-img" />
      </main>
    );
  }
  return (
    <main>
      <Navbar />
      <Search />
      <Info />
      <User />
      <Repos />
    </main>
  );
};

export default Dashboard;
