import { MdOutlineEmail } from "react-icons/md";
import PasswordIcon from "./PasswordIcon";
import { FaLink } from "react-icons/fa";

export function InputControl({ name, type, casee }) {
  return (
    <div className="flex items-center justify-start gap-4 border-solid border-#D7D7D7 border-[1px] p-3 rounded-sm w-full rounded-bl">
      {type === "email" ? (
        casee !== "register" ? (
          <MdOutlineEmail color="#4F46E5" />
        ) : null
      ) : type === "password" ? (
        casee !== "register" ? (
          <PasswordIcon />
        ) : null
      ) : name === "Link" ? (
        <FaLink />
      ) : null}
      <input type={type} name={name} placeholder={name} className="w-full" />
    </div>
  );
}
