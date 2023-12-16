import { Input } from "@/components/ui/input";
import { MdOutlineEmail } from "react-icons/md";
import PasswordIcon from "./PasswordIcon";

export function InputControl({ name, type }) {
  return (
    <div className="flex items-center justify-start gap-4 border-solid border-#D7D7D7 border-[1px] p-3 rounded-sm w-full rounded-bl">
      {type === "email" ? (
        <MdOutlineEmail color="#4F46E5" size={20} />
      ) : type === "password" ? (
        <PasswordIcon color="#4F46E5" />
      ) : null}
      <input type={type} name={name} placeholder={name} className="w-full" />
    </div>
  );
}
