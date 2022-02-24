import React from "react";

export const Footer = () => {
  return (
    <footer className={"justify-center items-center text-white font-eb-garamond"}>
      &copy; {new Date().getFullYear()} - 
      Principia Labs
      {/* Principia Labs - {" "}
      <a href={"https://github.com/Principia-Labs-LLC"}>Github</a> -
      <a className={"p-1"} href={"https://twitter.com/GrantStenger"}>Twitter</a> */}
    </footer>
  );
};
