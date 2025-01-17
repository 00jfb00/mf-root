import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Root from "./root.component";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  errorBoundary(err, info, props) {
    return (
      <div className="h-16 flex items-center justify-between px-6 bg-primary text-white">
        Error
      </div>
    );
  }
});

export const bootstrap = lifecycles.bootstrap;
export const mount = props => {
  return lifecycles.mount(props);
};
export const unmount = lifecycles.unmount;

export const devtools = {
  overlays: {
    selectors: [".root.navBarHeight"],
    options: {
      color: "red"
    }
  }
};
