import React from "react";
import NavBarAdmin from "../../components/admin/NavBarAdmin";
import AddVideo from "../../components/admin/AddVideo";
import "../../styles/admin/Dashboard.scss";
import AddCategory from "../../components/admin/AddCategory";

export default function Dashboard() {
  return (
    <>
      <NavBarAdmin />
      <main>
        <h1>Origin's Digital Admin Panel</h1>
        <div className="container-dashboard">
          <AddVideo />
          <AddCategory />
        </div>
      </main>
    </>
  );
}
