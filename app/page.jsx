import Feed from "@components/Feed";

export const metaData = {
  title : "Promptopia",
  description : "first next js project"
}

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover and Share
        <br className="max-md:hidden" />
        <p className="orange_gradient text-center">AI Powered Prompts</p>
      </h1>
      <p className="desc text-center">
        Promptopia is an open-source AI prompting tool for modårn world to
        discover, create and share creative prompts.
      </p>
      <Feed></Feed>
    </section>
  );
};

export default Home;
