import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList skill="React" />
      </div>
    </div>
  );
}

const Avatar = () => <img className="avatar" src="josh.jpg" alt="josh" />;

const Intro = () => (
  <div>
    <h1>Joshua Crisp</h1>
    <p>
      I have been passionate about technology since a young age. I have had
      various roles in Hospitality & Sales before landing an apprenticeship at
      Glean in December 2021. This feels like the start of my journey, upon
      completing my apprenticeship I have plans to start learning how to code
      and develop software.
    </p>
  </div>
);

const SkillList = () => {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="😊" bgcolor="red" />
      <Skill skill="HTML" emoji="😂" bgcolor="blue" />
      <Skill skill="CSS" emoji="🤣" bgcolor="yellow" />
      <Skill skill="JavaScript" emoji="❤️" bgcolor="green" />
      <Skill skill="TypeScript" emoji="😍" bgcolor="turquoise" />
    </div>
  );
};

const Skill = (props) => {
  return (
    <div style={{ backgroundColor: props.bgcolor }} className="skill">
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
};

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
