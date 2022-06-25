const SMain = () => {
  const sdcontent: {title: string, content: string}[] = [
    {
      title: ``,
      content: `Continuous Improvement,
      Persistent in this field`,
    },
    {
      title: ``,
      content: `Passion, Blend any Environment.`,
    },
    {
      title: ``,
      content: `Can Do, Grow up, Simple ways.`,
    },
    {
      title: ``,
      content: `Last Trending.`,
    },
  ];
  return (
    <main className="flex justify-center flex-col items-center">
      <section  >
        { sdcontent.map( (art, indx) => (
        <article className={"p-1 m-1 border-solid border-2 rounded-lg"}>
          <h3>{art.title}</h3>
          <ul>
            <li>{art.content}</li>
          </ul>
        </article>
        ))}
      </section>
    </main>
  );
};

export default SMain;


