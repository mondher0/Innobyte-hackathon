import Image from "next/image";

const Footer = () => {
  return (
    <div className="Container min-w-screen py-20 p-6">
      <Image src="/logo.svg" width={200} height={200} />
    </div>
  );
};
export default Footer;
