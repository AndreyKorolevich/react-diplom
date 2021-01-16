import React from "react";
import { NavLink } from "react-router-dom";

const CatalogNavbar = () => {
  return (
    <ul className="catalog-categories nav justify-content-center">
      <li className="nav-item">
        <NavLink className="nav-link active" to="#">
          Все
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="#">
          Женская обувь
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="#">
          Мужская обувь
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="#">
          Обувь унисекс
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="#">
          Детская обувь
        </NavLink>
      </li>
    </ul>
  );
};

export default CatalogNavbar;