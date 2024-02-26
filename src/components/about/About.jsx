import "./about.css";

const About = ({ company, backstory, workers }) => {
  return (
    <div className="about">
      <h2>About</h2>
      <p>Company name: {company.name}</p>
      <p>Location: {company.home_town}</p>
      <p>Backstory: {backstory}</p>
      <p>Workers: {workers}</p>
    </div>
  );
};

export default About;
