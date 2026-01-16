import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Latest from "./components/latest";
import MembersSection from "./components/membersSection";
import Banner from "./components/banner";
import Menu from "./components/Menu";
import About from "./components/About";
import CustomCover from "./components/customCover";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Menu />
    <CustomCover />
    <Banner />
    <About />
    <Latest />
    <MembersSection />
  </StrictMode>
);
