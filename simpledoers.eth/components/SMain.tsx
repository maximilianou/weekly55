const SMain = () => {
  const sdcontent: {title: string, content: string}[] = [
    {
      title: `Who simple doers Are`,
      content: `We are Believers", We believe in continuous improvement, and we are
      persistent in this field, we love to apply this concept to every
      aspect of our lives.`,
    },
    {
      title: `What simple doers Have`,
      content: `We have Passion", We have worked for
      big companies and startups too, on big teams and small teams, so
      we can blend into any environment.`,
    },
    {
      title: `Why simple doers Do`,
      content: `We Can Do It", We listen What have to be made to grow up, we know
      there are simple ways to do that. We love our jobs, our
      professions, the tools that make things possible, We Do what we
      Love.`,
    },
  ];
  return (
    <main className="flex justify-center flex-col items-center">
      <div className="max-w-screen-lg " >
        <video src={'./video_apt_02.mp4'} 
               muted={true} autoPlay={true} loop={true}  
        />
      </div>
      <div>
      <div className={"-mt-80"}>
      <section className="max-w-screen-lg bg-transparent " >
        { sdcontent.map( (art, indx) => (
        <article className={"p-1 m-1 border-solid border-2 rounded-lg"}>
          <h3>{art.title}</h3>
          <ul>
            <li>
              "We are Believers", We believe in continuous improvement, and we are
              persistent in this field, we love to apply this concept to every
              aspect of our lives.
            </li>
          </ul>
        </article>
        ))}
      </section>
      </div>
      </div>      
    </main>
  );
};

export default SMain;


