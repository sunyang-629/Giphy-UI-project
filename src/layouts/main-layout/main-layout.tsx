import React from "react";
import { Outlet } from "react-router-dom";
import { HomeButton, SearchInput } from "../../components";

const MainLayout: React.FC = () => {
  return (
    <main className="main" data-testid="main">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: 10,
        }}
      >
        <SearchInput />
        <HomeButton />
      </div>
      <Outlet />
    </main>
  );
};

export default MainLayout;
