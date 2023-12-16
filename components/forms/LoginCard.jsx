"use client";
import React from "react";
import "./auth.css";
import FormControl from "./FormControl";
import { Button } from "../ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const LoginCard = () => {
  const router = useRouter();
  return (
    <div className="login">
      <div className="login-card">
        <h2>Log in to your account</h2>
        <p>
          enter your infos to enter to your freelancer <br />
          account.
        </p>
        <form
          className="mt-5"
          onSubmit={(e) => {
            e.preventDefault();
            router.push("/users/5");
          }}
        >
          <FormControl
            name="Adresse E-mail "
            type="email"
          />
          <FormControl
            name="Mot de Passe"
            type="password"
          />

          <div className="labels">
            <label
              htmlFor="password"
              className="hover"
            >
              Mot de passe oublié?
            </label>
          </div>
          <Button className="w-full mt-5">Log in</Button>
          <div
            className="
            flex items-center  text-[#4F46E5] gap-3 mt-4"
          >
            <div className="w-24 h-[1px]  bg-[#D7D7D7] "></div>
            <p className="text-center">ou continue avec</p>
            <div className="w-24 h-[1px]  bg-[#D7D7D7] "></div>
          </div>
          <Button
            className="w-full mt-5 flex items-center gap-4 text-[#414141]"
            variant={"soft"}
            type="submit"
          >
            <Image
              src="/google-icon.svg"
              width={20}
              height={20}
            />
            Connexion avec Google
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginCard;
