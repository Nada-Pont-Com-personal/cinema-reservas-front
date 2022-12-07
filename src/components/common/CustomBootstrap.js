import React from "react";
import { Col } from "reactstrap";

function Colxx(props) {
  return (
    <Col {...props} widths={["xxs", "xs", "sm", "md", "lg", "xl", "xxl"]} />
  );
}
function Separator({ className }) {
  return <div className={`separator ${className}`} />;
}
export { Colxx, Separator };
