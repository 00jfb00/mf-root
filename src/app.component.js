import React, { Component } from "react";
import { links } from "./root.helper.js";
import { Link } from "@reach/router";
import { KHeader, KMain } from "ava30-frontend-componentslib";

export default class App extends Component {
  render() {
    return (
      <KMain>
        <KHeader
          id="k-header"
          backgroundColor="navy"
          bodyRight={
            <div className="right-body">
              {links.map(link => {
                return (
                  <Link
                    key={link.href}
                    style={{ color: "white" }}
                    className="link"
                    to={link.href}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          }
        />
      </KMain>
    );
  }
}
