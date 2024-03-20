import React from "react";

function Nav(props) {
  return (
    <header>
      <nav>
        <ul className="flex-row" style={{ justifyContent: "flex-end" }}>
          
          {props.categories.map((category) => {
            // SHORT CIRCUIT EXPRESSSION
            // as long as ${currentCategory.name === category.name, navActive will be returned
            return (
              <li key={category.name}>
                {/* callback fx declaration to selectively render, not auto */}
                <a
                  href={"#" + category.name.toLowerCase()}
                  onClick={() => {
                    props.setPage(category.name);
                  }}
                  className={`mx-1 ${
                    props.page === category.name && "navActive"
                  }`}
                >
                  {category.name}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;