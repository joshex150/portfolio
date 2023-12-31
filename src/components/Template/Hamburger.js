import React, { Suspense, lazy, useState } from "react";

import { Link } from "react-router-dom";
import routes from "../../data/routes";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Menu = lazy(() => import("react-burger-menu/lib/menus/slide"));

const Hamburger = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="hamburger-container">
      <nav className="main" id="hambuger-nav">
        <ul>
          {open ? (
            <li className="menu close-menu">
              <div onClick={() => setOpen(!open)} className="menu-hover">
                <AiOutlineClose size={25} />
              </div>
            </li>
          ) : (
            <li className="menu open-menu">
              <div onClick={() => setOpen(!open)} className="menu-hover">
                <AiOutlineMenu size={25} />
              </div>
            </li>
          )}
        </ul>
      </nav>
      <Suspense fallback={<></>}>
        <Menu right isOpen={open} style={{ transition: "all ease-in-out 1s" }}>
          <ul className="hamburger-ul">
            {routes.map((l) => (
              <li key={l.label}>
                <Link to={l.path} onClick={() => setOpen(!open)}>
                  <h3 className={l.index && "index-li"}>{l.label}</h3>
                </Link>
              </li>
            ))}
          </ul>
        </Menu>
      </Suspense>
    </div>
  );
};

export default Hamburger;
