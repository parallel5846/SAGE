import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import Container from "../components/Container/Container";
import InputArea from "../components/InputArea/InputArea";
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
