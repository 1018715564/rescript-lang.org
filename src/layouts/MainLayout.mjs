// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Mdx from "../common/Mdx.mjs";
import * as React from "react";
import * as Footer from "../components/Footer.mjs";
import * as Markdown from "../components/Markdown.mjs";
import * as Navigation from "../components/Navigation.mjs";
import * as Caml_option from "rescript/lib/es6/caml_option.js";

function MainLayout(Props) {
  var componentsOpt = Props.components;
  var children = Props.children;
  var components = componentsOpt !== undefined ? Caml_option.valFromOption(componentsOpt) : Markdown.$$default;
  var overlayState = React.useState(function () {
        return false;
      });
  return React.createElement(React.Fragment, undefined, React.createElement("div", {
                  className: "mt-4 xs:mt-16"
                }, React.createElement("div", {
                      className: "text-gray-80"
                    }, React.createElement(Navigation.make, {
                          overlayState: overlayState
                        }), React.createElement("div", {
                          className: "flex xs:justify-center overflow-hidden pb-48"
                        }, React.createElement("main", {
                              className: "mt-16 min-w-320 lg:align-center w-full px-4 md:px-8 max-w-1280 "
                            }, React.createElement(Mdx.Provider.make, {
                                  components: components,
                                  children: children
                                }))), React.createElement(Footer.make, {}))));
}

var make = MainLayout;

export {
  make ,
}
/* Mdx Not a pure module */
