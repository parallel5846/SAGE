import Sidebar from "./Sidebar/Sidebar";
import Navbar from "./Navbar/Navbar";
import Container from "./Container/Container";
import InputArea from "./InputArea/InputArea";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="main">
        <Navbar />
        <Container />
        <InputArea />
      </div>
    </div>
  );
};

export default Home;
