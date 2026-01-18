import UserMessage from "./UserMessage";
import AIResponse from "./AIResponse";
import "./Container.css";

const Container = () => {
  return (
    <div className="container">
      <h1>What can I help with?</h1>
      <UserMessage />
      <AIResponse />
    </div>
  );
};

export default Container;
