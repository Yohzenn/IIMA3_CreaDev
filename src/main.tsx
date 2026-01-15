import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Latest from "./components/latest";
import MembersSection from "./components/membersSection";
import Banner from "./components/banner";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Banner />
    <Latest></Latest>
    <MembersSection />
  </StrictMode>
);
