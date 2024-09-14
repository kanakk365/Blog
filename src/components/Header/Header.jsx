import React from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <header>
      <Container>
        <nav>
          <div></div>
          <div>
            {navItems.map((navItem) => {
              navItem.active ? (
                <li key={navItem.name}>
                  {" "}
                  <button onClick={navigate(`/${navItem.slug}`)}>
                    {navItem.name}
                  </button>
                </li>
              ) : null;
            })}
            {authStatus && (
              <li><LogoutBtn/></li>
            )}
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
