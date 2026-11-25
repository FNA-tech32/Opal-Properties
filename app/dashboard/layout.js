import React from "react";
import Dashboard from "./components/Dashboard/Dashboard";

export const metadata = {
  title: "Dashboard | Opal Properties",
  description: "Manage your Opal Properties listings, messages, and profile.",
};

export default function DashboardLayout({ children }) {

  return (
    <>
      <Dashboard component={children} />
    </>
  );
}