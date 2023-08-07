import memeFace from "../images/meme-face.png";

export default function Header() {
    return (
      <header className="header">
        <div className="header-left">
          <img src={memeFace} alt="meme face" />
          <h2>Meme Generator</h2>
        </div>
        <div className="header-right">
            <h4>React - Project 3</h4>
        </div>
      </header>
    );
}