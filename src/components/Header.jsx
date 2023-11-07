import rreactImg from "../assets/react-core-concepts.png";

const reactDescriptions = ["Fundmental", "Crucial", "Core"];

function genRondomInt(max) {
  return Math.floor(Math.random() * max);
}

function Header() {
  const description = reactDescriptions[genRondomInt(reactDescriptions.length)];
  return (
    <header>
      <img src={rreactImg} alt='Stylized atom' />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

export default Header;
