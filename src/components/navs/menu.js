import "./menu.css";

import ChatIcon from "../icons/chat";
import HomeIcon from "../icons/home";
import Link from "gatsby-link";
import ProjectsIcon from "../icons/projects";
import React from "react";
import UserIcon from "../icons/user";
import BlogIcon from "../icons/blog";

const Menu = () => (
  <nav className="Menu">
    <Link
      to="/"
      activeStyle={{
        background: "var(--grey-bg)",
        boxShadow: "inset var(--nav-shadow)",
      }}
    >
      <HomeIcon />
    </Link>
    <Link
      to="/about"
      activeStyle={{
        background: "var(--grey-bg)",
        boxShadow: "inset var(--nav-shadow)",
      }}
    >
      <UserIcon />
    </Link>
    <Link
      to="/projects"
      activeStyle={{
        background: "var(--grey-bg)",
        boxShadow: "inset var(--nav-shadow)",
      }}
    >
      <ProjectsIcon />
    </Link>{" "}
    <Link
      to="/blog"
      activeStyle={{
        background: "var(--grey-bg)",
        boxShadow: "inset var(--nav-shadow)",
      }}
    >
      <BlogIcon />
    </Link>
    <Link
      to="/contact"
      activeStyle={{
        background: "var(--grey-bg)",
        boxShadow: "inset var(--nav-shadow)",
      }}
    >
      <ChatIcon />
    </Link>
  </nav>
);
export default Menu;
