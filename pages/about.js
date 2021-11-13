import About from "../components/About";
import Header from "../components/Header";

const about = () => {
  return (
    <div className="">
      <Header />
      <div className="max-w-3xl  flex  flex-col mx-auto">
        <About />
      </div>
    </div>
  );
};

export default about;
