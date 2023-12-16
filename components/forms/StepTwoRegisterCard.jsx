import React from "react";
import "./auth.css";
import FormControl from "./FormControl";
import { Button } from "../ui/button";
import { IoIosAdd } from "react-icons/io";

const StepTwoRegisterCard = () => {
  return (
    <div className="login">
      <div className="login-card">
        <h2>
          Just A few steps to set your
          <br /> account
        </h2>
        <p>
          Enter the necessary info, and start your journey <br />
          with mosaic
        </p>
        <form className="mt-5">
          <p className="regiser-p">Your CV</p>
          <label
            htmlFor="cv"
            className="flex items-center justify-start gap-2 bg-indigo50 text-[#312E81] font-semibold w-fit p-2 rounded-md"
          >
            Click to Upload <IoIosAdd size={20} />
          </label>
          <input type="file" name="CV" className="opacity-0" id="cv" />
          <p className="regiser-p">External Links</p>
          <FormControl name="Platforme name" type="text" />
          <FormControl name="Link" type="text" />
          <span className="flex items-center gap-2">
            <p className="regiser-p">Add</p>
            <IoIosAdd size={20} color="#6B7280"/>
          </span>
          <Button className="w-full mt-5">Continuer</Button>
        </form>
      </div>
    </div>
  );
};

export default StepTwoRegisterCard;
