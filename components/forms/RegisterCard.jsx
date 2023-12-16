"use client";
import "./auth.css";
import FormControl from "./FormControl";
import { Button } from "../ui/button";
import Image from "next/image";
import { useState } from "react";
import StepTwoRegisterCard from "./StepTwoRegisterCard";

const RegisterCard = () => {
  const [stepTwo, setStepTwo] = useState(false);
  if (stepTwo) {
    return <StepTwoRegisterCard />;
  }
  return (
    <div className="login">
      <div className="login-card">
        <h2>Creation of a new account</h2>
        <p>
          Enter the necessary info, and start your journey
          <br /> with us
        </p>
        <form className="mt-5">
          <p className="regiser-p">Account</p>
          <FormControl name="Adresse E-mail " type="email" casee="register" />
          <FormControl name="Mot de Passe" type="password" casee="register" />
          <p className="regiser-p">Personal</p>
          <FormControl name="First Name" type="text" />
          <FormControl name="Last Name" type="text" />
          <p className="regiser-p">Personal</p>
          <FormControl name="Your title" type="text" />
          <FormControl name="Bio" type="text" />
          <Button className="w-full mt-5">Continue</Button>
          <div
            className="
      flex items-center  text-[#4F46E5] gap-3 mt-4 w-full justify-between"
          >
            <div className="w-28 h-[1px]  bg-[#D7D7D7] "></div>
            <p className="text-center">ou continue avec</p>
            <div className="w-28 h-[1px]  bg-[#D7D7D7] "></div>
          </div>
          <Button
            className="w-full mt-5 flex items-center gap-4 text-[#414141]"
            variant={"soft"}
          >
            <Image src="/google-icon.svg" width={20} height={20} />
            Connexion avec Google
          </Button>
        </form>
      </div>
    </div>
  );
};

export default RegisterCard;
