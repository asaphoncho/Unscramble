import { useState, useEffect } from 'react'
import './App.css'
import Timer from './Timer.jsx'
import Button from './Button.jsx'
import mySound from './assets/Startsound.mp3'
import successSound from './assets/successsound.mp3'
import drumRoll from './assets/drumroll.mp3'
import Shuffle from './assets/shuffle.mp3'
import lowscore from './assets/lowscore.mp3'
import incorrectSound from './assets/incorrect.mp3'
import hintSound from './assets/hintsound.mp3'
import typing from './assets/typing.mp3'

function App() {
    function playSound(){
      var audio = new Audio(mySound)
      audio.play()
    }
    // Level 1 - 5 words
    const words1 = [
      "apple", "table", "chair", "house", "plant", "grape", "river", "stone", "cloud", "grass",
      "water", "lemon", "bread", "light", "glass", "shoes", "clock", "store", "sweet", "grill",
      "beach", "fruit", "train", "truck", "flame", "block", "brain", "whale", "crown", "flock",
      "flour", "sheep", "shelf", "storm", "sword", "trunk", "whisk", "wheat", "grape", "grove",
      "peach", "blade", "brush", "toast", "scent", "scarf", "pearl", "screw", "slope", "steak",
      "sugar", "cream", "crane", "stone", "sweat", "brave", "cabin", "sauce", "zebra", "glove",
      "stove", "paint", "plate", "grind", "crown", "sheer", "shark", "slide", "snake", "swing",
      "leash", "glare", "broom", "flame", "flask", "beard", "board", "dough", "dwarf", "swirl",
      "torch", "sting", "thorn", "train", "wrist", "vivid", "gravy", "bliss", "blush", "fries",
      "grain", "glide", "grove", "swamp", "badge", "brick", "clamp", "creek", "grasp", "maple"
    ]
    // Level 6-20 words
    const words2 = [
      "pumpkin", "blanket", "picture", "dolphin", "guitar", "cabinet", "mountain", "airport", "cactus", "bedroom",
      "cooking", "glacier", "journey", "ceiling", "faraway", "lantern", "orchard", "painter", "rainbow", "sandbox",
      "teacher", "tornado", "village", "whisper", "cottage", "sweater", "kitchen", "library", "bicycle", "gallery",
      "machine", "pancake", "pillow", "sunrise", "wedding", "balloon", "chicken", "dancing", "economy", "fishing",
      "giraffe", "harvest", "holiday", "justice", "luggage", "mystery", "outside", "pathway", "postman", "reptile",
      "skating", "sunbeam", "visitor", "backpack", "ballpark", "chamber", "cookies", "daytime", "diamond", "eyelash",
      "feather", "freedom", "giggles", "hotdogs", "ketchup", "laughter", "mailbox", "necktie", "notepad", "shampoo",
      "snowman", "teacher", "tornado", "journey", "lantern", "orchard", "sandbox", "ballpark", "whistle", "cabinet",
      "monarch", "cyclone", "vintage", "forever", "network", "pebble", "context", "muffins", "circuit", "gobbler",
      "chalice", "festival", "glimpse", "seventh", "gravity", "reptile", "notepad", "balloon", "fishing", "village"
    ]
    // Level 21 beyond
    const words3 = [
      "computer", "sandwich", "birthday", "notebook", "building", 
      "umbrella", "headache", "delivery", "hardware", "treasure",
      "children", "keyboard", "elevator", "hospital", "calendar",
      "location", "strategy", "industry", "planning", "invoices",
      "medicine", "learning", "reliable", "document", "aluminum",
      "magazine", "friendly", "vacation", "airplane", "baseball",
      "mountain", "language", "gardener", "graduate", "holidays",
      "newspaper", "bathroom", "headquarters", "reception", "scissors",
      "applause", "training", "passport", "colleague", "colorful",
      "stadiums", "festival", "assembly", "compound", "inflation",
      "semester", "official", "deadline", "workshop", "envelope",
      "software", "barbecue", "disaster", "research", "computer",
      "backpack", "dentists", "football", "medicine", "midnight",
      "platform", "quitting", "birthday", "solution", "strategy",
      "volcanic", "feedback", "tomorrow", "frequent", "incoming",
      "resource", "marathon", "textbook", "snapshot", "customer",
      "portrait", "workflow", "laughter", "wireless", "television",
      "lifestyle", "delivery", "ordinary", "customer", "sunshine",
      "checkout", "hospital", "reliable", "download", "umbrella",
      "vacation", "deadline", "organize", "headache", "backpack"
   ]
    const [randomWord1, setRandomWord] = useState("")
    const [timer, setTimer] = useState(60);
    const [count, setCount] = useState(0)
    const [inputValue, setInputValue] = useState("")
    const [scrambledWord, setScrambledWord] = useState("")
    const [scrambledWordArray, setScrambledWordArray] = useState([])
    const [correctWords, setCorrectWords] = useState([])
    const [hintCount, setHintCount] = useState(3)
    const [isPlaying, setIsPlaying] = useState(false);

    if(timer == 0 && count >= 10){
      var audio = new Audio(drumRoll)
      audio.play()
    }
    else if(timer == 0 && count < 10){
      var audio = new Audio(lowscore)
      audio.play()
    }

    var hintText = document.getElementById('hint-text')

    function scrambleWord(word) {
      //Splitting and scrambling the word letters
      let wordArray = word.split('');
      for (let i = wordArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
      }
      setScrambledWordArray(wordArray)
      //Converting the array back to a string
      return wordArray.join('');
    }
    //Input value change
    function handleInputChange(event){
      setInputValue(event.target.value)
      var audio = new Audio(typing)
      audio.play()
    }
    //Soundtrack
    useEffect(() => {
      const startSound = () => {
        if (!isPlaying) {
          const backgroundSound = new Audio(mySound);
          backgroundSound.loop = true;
          backgroundSound.play().catch(error => {
            console.error('Error playing sound:', error);
          });
          setIsPlaying(true);
        }
      };
  
      // Listen for any click or key press to start the sound
      window.addEventListener('click', startSound);
      window.addEventListener('keydown', startSound);
  
      // Cleanup event listeners when the component unmounts
      return () => {
        window.removeEventListener('click', startSound);
        window.removeEventListener('keydown', startSound);
      };
    }, [isPlaying]);  

    //Rerendering scrambled word each time the value changes
    useEffect(()=>{ 
      if(count < 5){
      var randomIndex = Math.floor(Math.random(words1)*(words1.length))
      var randomword = words1[randomIndex]
      setRandomWord(randomword)
      var scrambledWord = scrambleWord(randomword)
      setScrambledWord(scrambledWord)
     }
     else if(count >= 5 && count < 20){
      var randomIndex = Math.floor(Math.random(words2)*(words2.length))
      var randomword2 = words2[randomIndex]
      setRandomWord(randomword2)
      var scrambledWord = scrambleWord(randomword2)
      setScrambledWord(scrambledWord)
     }
     else if(count >= 20){
      var randomIndex = Math.floor(Math.random(words3)*(words3.length))
      var randomword2 = words3[randomIndex]
      setRandomWord(randomword2)
      var scrambledWord = scrambleWord(randomword2)
      setScrambledWord(scrambledWord)
     }
      
    }, [count])

    //UseEffect for the timer countdown
    useEffect(() => {
      const interval = setInterval(() => {
      setTimer(t => {
          if (t == 0) {
          clearInterval(interval);
          return 0;
          }
          return t - 1;
          
      });
      }, 1000);
      return () => clearInterval(interval)
    }, [timer]);
    function resetGame(){
      setTimer(60)
      setCount(0)
      setHintCount(3)
      setCorrectWords([])
      setInputValue("")
      document.getElementById("guess-input").focus()
    }
    function shuffle(y){
      var sound = new Audio(Shuffle)
      let x = y.split('')
      for (let i = x.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [x[i], x[j]] = [x[j], x[i]];
      }
      setScrambledWordArray(x)
      sound.play()
    }

    //Hint function
    function getHint(){
      var audio = new Audio(hintSound)
      var errorSound = new Audio(incorrectSound)
      if(count<5 && hintCount > 0){
        hintText.innerHTML = `<span style="color: white;">The first three letters are <span class='highlight-color'>${(randomWord1.slice(0,3)).toUpperCase()}</span></span>`
        setHintCount(h => h - 1)
        audio.play()
      }
      else if(count >= 5 && hintCount > 0){
        hintText.innerHTML = `<span style="color: white;">The first three letters are <span class='highlight-color'>${(randomWord1.slice(0,3)).toUpperCase()}</span></span>`
        setHintCount(h => h - 1)
        audio.play()
      }
      else if(hintCount == 0){
        hintText.innerHTML = `<span style="color: red;">You have exhausted your hints</span>`
        errorSound.play()
      }
      
    }

    
    //This function checks the validity of the answer and adds more time if correct
    function check(){
      var guess = document.getElementById("guess-input").value.toLowerCase()
      var sound = new Audio(successSound)

      if(guess == randomWord1 && count < 5){
        setCorrectWords(c => [...c, guess])
        var randomIndex = Math.floor(Math.random(words1)*(words1.length))
        setCount(c => c + 1)
        setTimer(t => {
          if(t > 55){
            return t + (60 - t)
          }
          else{
            return t + 5
          }
        })
        setRandomWord(words1[randomIndex])
        setInputValue("")
        document.getElementById("guess-input").focus()
        hintText.textContent = ''
        sound.play()
        setTimeout(()=>{document.getElementById("guess-input").style.boxShadow = '#aa66eee0 0 0 100px 20px'}, 0)
        setTimeout(()=>{document.getElementById("guess-input").style.boxShadow = 'none'}, 100)
      }
      else if(guess == randomWord1 && count >= 5 && count < 20){
        setCorrectWords(c => [...c, guess])
        var randomIndex = Math.floor(Math.random(words2)*(words2.length))
        setCount(c => c + 1)
        setTimer(t => {
          if(t > 50){
            return t + (60 - t)
          }
          else{
            return t + 10
          }
        })
        setRandomWord(words2[randomIndex])
        setInputValue("")
        document.getElementById("guess-input").focus()
        hintText.textContent = ''
        sound.play()
        setTimeout(()=>{document.getElementById("guess-input").style.boxShadow = '#aa66eee0 0 0 100px 20px'}, 0)
        setTimeout(()=>{document.getElementById("guess-input").style.boxShadow = 'none'}, 100)
      }
      else if(guess == randomWord1 && count >= 20){
        setCorrectWords(c => [...c, guess])
        var randomIndex = Math.floor(Math.random(words3)*(words3.length))
        setCount(c => c + 1)
        setTimer(t => {
          if(t > 50){
            return t + (60 - t)
          }
          else{
            return t + 10
          }
        })
        setRandomWord(words3[randomIndex])
        setInputValue("")
        document.getElementById("guess-input").focus()
        hintText.textContent = ''
        sound.play()
        setTimeout(()=>{document.getElementById("guess-input").style.boxShadow = '#aa66eee0 0 0 100px 20px'}, 0)
        setTimeout(()=>{document.getElementById("guess-input").style.boxShadow = 'none'}, 100)
      }
      else{
        var audio = new Audio(incorrectSound)
        console.log("wrong attempt")
        audio.play()
        hintText.innerHTML = `<span style="color: red;">Wrong attempt</span>`
        setTimeout(()=>{document.getElementById("guess-input").style.boxShadow = 'red 0 0 100px 20px'}, 0)
        setTimeout(()=>{document.getElementById("guess-input").style.boxShadow = 'none'}, 100)
      }
      
    }
  if(timer > 0){
    return (
      <>
         <section className='game-area'>
          <div className='game-area-container'>
            <span className='level-text'>Level {count + 1}</span>
            <Timer timer={timer}/>
              <div className='letters-container'>{scrambledWordArray.map(letter => (<div className='word-letters'>{letter.toUpperCase()}</div>))}</div>
              <span id='hint-text'></span>
              <div className='butons-div'>
                <div className='hint-count'>{hintCount}</div>
                <Button handleAddTime={getHint} handleClass='special-button'><i class="fa-regular fa-lightbulb"></i></Button>
                <Button handleAddTime={()=> shuffle(scrambledWord)} handleClass='special-button'><i class="fa-solid fa-shuffle"></i></Button>
              </div>
              <span className='score'>Score: {count * 100}</span>
              <input type="text" id='guess-input' value={inputValue} onChange={handleInputChange} />
              <Button handleAddTime={check} handleClass='play-button'>Play</Button>
          </div>
         </section>
      </>
    )
  }
  else{
    return(
      <>
      <section className='game-area'>
          <div className='result-area-container'>
              <span className='performance-message'>{count > 10 ? 'Great attempt!': 'Better luck next time!'}</span>
              <span className='correct-answer-text'>The correct answer was <span className='highlight-color'>{randomWord1.toUpperCase()}</span></span>
              <span className='words-list-heading-text'>Your score was {count*100}</span>
              <span className='words-list-heading-text'>Here is a list of words you unscrambled:</span>
              <div className='letters-container2'>{correctWords.map(cw => (<span className='word-letters'>{cw}</span>))}</div>
              <Button handleAddTime={resetGame} handleClass='play-button'>Play again</Button>
          </div>
      </section>
      
      
      </>
    )
  }
}

export default App
