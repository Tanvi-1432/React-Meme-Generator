import React, {useState, useEffect} from "react";

export default function Meme() {

  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    memeImage: '' 
  });

  function handleChange(event) {
    const {name, value} = event.target;
    setMeme(prevMeme => {
      return{
        ...prevMeme,
        [name]: value
      }
    })
  }

  const [allMemes, setAllMemes] = React.useState({});

  // useEffect(() => {
  //   fetch("https://api.imgflip.com/get_memes")
  //   .then(res => res.json())
  //   .then(data => setAllMemes(data))
  // }, [])

  useEffect(() => {
    async function getMemes () {
      const res = await fetch("https://api.imgflip.com/get_memes")
      const data = await res.json();
      setAllMemes(data);
    }
    getMemes();
  }, [])


  function getMemeImage() {
    let memesArray = allMemes.data.memes;
    let randomNum = Math.floor(Math.random() * memesArray.length);
    // memesArray[randomNum].url;
    setMeme(prevState => {
        return {
            ...prevState,
            memeImage: memesArray[randomNum].url
        }
    })
  }

  return (
    <main className="meme-generator">
      <div className="inputs">
        <input
          type="text"
          name="topText"
          id="line-1"
          value={meme.topText}
          placeholder="Top text"
          onChange={handleChange}
        />
        <input
          type="text"
          name="bottomText"
          id="line-2"
          value={meme.bottomText}
          placeholder="Bottom text"
          onChange={handleChange}
        />
      </div>
      <button type="submit" onClick={getMemeImage}>
        Get a new meme image 🖼
      </button>
      <div className="memeImage">
        <img src={meme.memeImage} alt="" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
