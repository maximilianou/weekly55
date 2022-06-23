const SMain = () => {
  return (
    <main className="flex justify-center flex-col items-center">
      <div className="max-w-screen-lg " >
        <video src={'./video_apt_02.mp4'} muted={true} autoPlay={true} loop={true}  />
      </div>
      <div>
      <section className="max-w-screen-lg bg-transparent -mt-80 " >
        <article>
          <h3>Who simple doers Are </h3>
          <ul>
            <li>
              "We are Believers", We believe in continuous improvement, and we are
              persistent in this field, we love to apply this concept to every
              aspect of our lives.
            </li>
          </ul>
        </article>
        <article>
          <h3>What simple doers Have</h3>
          <ul>
            <li>
              "We have Passion", We have worked for
              big companies and startups too, on big teams and small teams, so
              we can blend into any environment.
            </li>
          </ul>
        </article>
        <article>
          <h3>Why simple doers Do</h3>
          <ul>
            <li>
              "We Can Do It", We listen What have to be made to grow up, we know
              there are simple ways to do that. We love our jobs, our
              professions, the tools that make things possible, We Do what we
              Love.
            </li>
          </ul>
        </article>
      </section>
      </div>
    </main>
  );
};

export default SMain;


