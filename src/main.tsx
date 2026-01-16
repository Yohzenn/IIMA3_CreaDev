import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Latest from "./components/latest";
import MembersSection from "./components/membersSection";
import Album from "./components/albumSection";
import Banner from "./components/Banner";
import Menu from "./components/Menu";
import About from "./components/About";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Menu />
    <Banner />
    <About />
    <Latest />
    <MembersSection />
    {/* <Album /> */}
  </StrictMode>
);
