import React from "react";
import "./auth.css";
import { InputControl } from "./InputControl";

const FormControl = ({ name, type }) => {
  return (
    <div className="form-control">
      <InputControl name={name} type={type} />
    </div>
  );
};

export default FormControl;
