import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Latest from "./components/latest";
import MembersSection from "./components/MembersSection";
import Banner from "./components/Banner";
import Menu from "./components/Menu";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Banner />
    <Menu />
    {/* <Latest></Latest> */}
    <MembersSection />
  </StrictMode>
);
