import React from "react";

const Footer = () => {
  let footerstyle = {
    position: "relative",
    marginTop: "auto",
    width: "100%",
  };
  return (
    <div className="bg-dark text-light py-3" style={footerstyle}>
      <p className="text-center">Copyright &copy; mytaskmanager.com </p>
    </div>
  );
};
export default Footer;
