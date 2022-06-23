import Image from "next/image";
import Link from "next/link";

const SFooter = () => {
  const footerItem: { href: string; content: string, imageSrc?: string }[] = [
    { href: "mailto:maximilianou@gmail.com", 
      content: "Email" },
    { href: "https://github.com/maximilianou/", 
      content: "GitHub",
      imageSrc: "/github_logo.svg" 
    },
    {
      href: "https://profile.codersrank.io/user/maximilianou/",
      content: "CodersRank",
      imageSrc: "/codersrank_logo.svg" 
    },
    {
      href: "http://buymeacryptocoffee.xyz/0xdcbb510698bd5d975c907c9166e3ee3de0f8b21b?ref=button_widget",
      content: "Donate a Crypto coffee",
      imageSrc: "/eth_icon_purple.svg" 
    },
    {
      href: "https://buymeacoffee.com/simpledoers/",
      content: "Donate a coffee",
      imageSrc: "/cup_of_coffee.svg" 
    },
  ];
  return (
    <footer className={footerStyle}>
      <ul className={ulStyle}>
        {footerItem.map((data, index ) => (
          <li key={index} className={liStyle} >
            <Link href={data.href} target={"_blank"}>
              <button className={buttonStyle}>
              { data.imageSrc && <Image width={40} height={30} src={data.imageSrc} /> }
              {data.content}
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
};
export default SFooter;

const ulStyle = `flex space-x-3`;
const liStyle = `
  bg-orange-500 shadow-lg shadow-orange-500/50
  text-slate-100
  rounded-xl
  p-2 
  `;
const buttonStyle = `
  bg-[#fb7b04] 
  text-slate-100 font-sans font-semibold
  p-0
`;

const footerStyle = `
  bg-transparent
  py-4 px-6 
  text-sm font-medium
  flex justify-center
`;