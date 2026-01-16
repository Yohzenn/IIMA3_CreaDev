import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Latest from "./components/latest";
import MembersSection from "./components/membersSection";
import Album from "./components/albumSection";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Latest></Latest>
    <MembersSection />
    <Album/>
  </StrictMode>
);
