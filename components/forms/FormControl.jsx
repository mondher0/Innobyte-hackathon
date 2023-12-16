import React from "react";
import "./auth.css";
import { InputControl } from "./InputControl";

const FormControl = ({ name, type, casee }) => {
  return (
    <div className="form-control">
      <InputControl name={name} type={type} casee={casee}/>
    </div>
  );
};

export default FormControl;
