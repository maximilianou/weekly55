import Image from "next/image";

const SMain = () => {
  const sdcontent: {title: string, content: string, imgSrc: string }[] = [
    {
      title: ``,
      content: `Continuous Improvement`,
      imgSrc: '/ewasm_logo.svg'
    },
    {
      title: ``,
      content: `Persistent`,
      imgSrc: '/linux_logo.svg'
    },
    {
      title: ``,
      content: `Passion`,
      imgSrc: '/typescript_logo.svg'
    },
    {
      title: ``,
      content: `Blend any Environment`,
      imgSrc: '/javascript_logo.svg',
    },
    {
      title: ``,
      content: `Can Do`,
      imgSrc: `/nodejs_logo.svg`,
    },
    {
      title: ``,
      content: `Simple ways`,
      imgSrc: `/ethereum_ens_logo.svg`,
    },
    {
      title: ``,
      content: `Simple tools`,
      imgSrc: `/hardhat_logo.svg`,
    },
    {
      title: ``,
      content: `Autonomous`,
      imgSrc: `/docker_logo.svg`,
    },
    {
      title: ``,
      content: `Last Trending`,
      imgSrc: `/ethereum_logo.svg`,
    },
  ];
  return (
    <main className=" ">
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 md:gap-4  " >
        { sdcontent.map( ({ title, content, imgSrc }, indx) => (
          <figure className="rounded-xl p-8 md:p-0 bg-[rgb(33,33,33,0.5)]"
          key={indx}>
            <Image 
              width={300} height={70}
              className="md:h-auto md:rounded-none rounded-full mx-auto " 
              src={imgSrc} alt={title}/>
            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
              <blockquote>
                <p className="text-2xl font-medium">{content}</p>
              </blockquote>
              <figcaption className="font-medium">
                <div className="text-slate-700 dark:text-slate-500">
                  {title}
                </div>
              </figcaption>
            </div>
          </figure>      
        ))}
      </div>
    </main>
  );
};

export default SMain;


