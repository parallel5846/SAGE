import Tools from "./Tools";
import ChatHistory from "./ChatHistory";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Tools />
      <ChatHistory />
    </div>
  );
};

export default Sidebar;
