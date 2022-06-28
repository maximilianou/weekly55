# weekly55
home nextjs dapp static site fleek typescript nodejs ens ipfs simpledoers.eth
----

----
- 

```tsx

```

----
- static site - out/ 
  
- SVG - npm run export - nextjs - typescript - fix upload

```tsx
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
  },  
}
module.exports = nextConfig
```
- package.json
```tsx
{
  "scripts": {
...
    "export": "./node_modules/.bin/next build && ./node_modules/.bin/next export",
...
  },
}
```

- [ERROR][SOLVED] fixed with akamai like before text
```
info  - No "exportPathMap" found in "/home/debian/projects/weekly55/simpledoers.eth/next.config.js". Generating map from "./pages"
Error: Image Optimization using Next.js' default loader is not compatible with `next export`.
  Possible solutions:
    - Use `next start` to run a server, which includes the Image Optimization API.
    - Use any provider which supports Image Optimization (like Vercel).
    - Configure a third-party loader in `next.config.js`.
    - Use the `loader` prop for `next/image`.
  Read more: https://nextjs.org/docs/messages/export-image-api
    at /home/debian/projects/weekly55/simpledoers.eth/node_modules/next/dist/export/index.js:157:23
    at async Span.traceAsyncFn (/home/debian/projects/weekly55/simpledoers.eth/node_modules/next/dist/trace/trace.js:79:20)
```

----
- NextJS Tailwind, one simple step
```tsx
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
      <h3>Contact Simple Doers Software Engineers</h3>
      <ul className={ulStyle}>
        {footerItem.map((data, index ) => (
          <li key={index} className={liStyle} >
            <Link href={data.href} target={"_blank"}>
              <button className={buttonStyle}>
              { data.imageSrc && <Image width={40} height={30} src={data.imageSrc}></Image> }
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
  py-4 px-6 
  text-sm font-medium
`;
```
<https://nextjs.org/docs/basic-features/typescript>

----
- Typescript, about React Props 
```tsx
// Declaring type of props - see "Typing Component Props" for more examples
type AppProps = {
  message: string;
}; /* use `interface` if exporting so that consumers can extend */

// Easiest way to declare a Function Component; return type is inferred.
const App = ({ message }: AppProps) => <div>{message}</div>;
```
<https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components/>

```tsx
type AppProps = {
  message: string;
  count: number;
  disabled: boolean;
  /** array of a type! */
  names: string[];
  /** string literals to specify exact string values, with a union type to join them together */
  status: "waiting" | "success";
  /** any object as long as you dont use its properties (NOT COMMON but useful as placeholder) */
  obj: object;
  obj2: {}; // almost the same as `object`, exactly the same as `Object`
  /** an object with any number of properties (PREFERRED) */
  obj3: {
    id: string;
    title: string;
  };
  /** array of objects! (common) */
  objArr: {
    id: string;
    title: string;
  }[];
  /** a dict object with any number of properties of the same type */
  dict1: {
    [key: string]: MyTypeHere;
  };
  dict2: Record<string, MyTypeHere>; // equivalent to dict1
  /** any function as long as you don't invoke it (not recommended) */
  onSomething: Function;
  /** function that doesn't take or return anything (VERY COMMON) */
  onClick: () => void;
  /** function with named prop (VERY COMMON) */
  onChange: (id: number) => void;
  /** function type syntax that takes an event (VERY COMMON) */
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** alternative function type syntax that takes an event (VERY COMMON) */
  onClick(event: React.MouseEvent<HTMLButtonElement>): void;
  /** an optional prop (VERY COMMON!) */
  optional?: OptionalType;
};
```
<https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example/>
----

```tsx
npx create-next-app simpledoers.eth
cd simpledoers.eth
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
<https://tailwindcss.com/docs/guides/nextjs>


----