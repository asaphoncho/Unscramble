import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Timer from './Timer.jsx'
import Button from './Button.jsx'

function App() {
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
    // Level 6-10 words
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
    
    const [randomWord1, setRandomWord] = useState("")
    const [timer, setTimer] = useState(60);
    const [count, setCount] = useState(0)
    const [inputValue, setInputValue] = useState("")
    const [scrambledWord, setScrambledWord] = useState("")
    const [scrambledWordArray, setScrambledWordArray] = useState([])
    const [correctWords, setCorrectWords] = useState([])
    const [hintCount, setHintCount] = useState(0)
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
    }
    //Rerendering scrambled word each time the value changes
    useEffect(()=>{ 
      if(count < 5){
      var randomIndex = Math.floor(Math.random(words1)*(words1.length))
      var randomword = words1[randomIndex]
      setRandomWord(randomword)
      var scrambledWord = scrambleWord(randomword)
      setScrambledWord(scrambledWord)
     }
     else if(count >= 5){
      var randomIndex = Math.floor(Math.random(words2)*(words2.length))
      var randomword2 = words2[randomIndex]
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
      setHintCount(0)
      setCorrectWords([])
      setInputValue("")
      document.getElementById("guess-input").focus()
    }
    function shuffle(y){
      let x = y.split('')
      for (let i = x.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [x[i], x[j]] = [x[j], x[i]];
      }
      setScrambledWordArray(x)
    }
    function getHint(){
      if(count<5 && hintCount < 3){
        hintText.innerHTML = `The first three letters are <span class='highlight-color'>${(randomWord1.slice(0,3)).toUpperCase()}</span>`
        setHintCount(h => h + 1)
      }
      else if(count >= 5 && hintCount < 3){
        hintText.innerHTML = `The first three letters are <span class='highlight-color'>${(randomWord1.slice(0,3)).toUpperCase()}</span>`
        setHintCount(h => h + 1)
      }
      else if(hintCount => 3){
        console.log('you have exhausted your hints')
      }
      
    }
    //This function checks the validity of the answer and adds more time if correct
    function check(){
      var guess = document.getElementById("guess-input").value.toLowerCase()
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
      }
      else if(guess == randomWord1 && count >= 5){
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
      }
      else{
        console.log("wrong attempt")
      }
      
    }
  if(timer > 0){
    return (
      <>
         <section className='game-area'>
          <div className='game-area-container'>
            <h1 className='level-text'>Level {count + 1}</h1>
            <Timer timer={timer}/>
              <div className='letters-container'>{scrambledWordArray.map(letter => (<div className='word-letters'>{letter.toUpperCase()}</div>))}</div>
              <span id='hint-text'></span>
              <h1 className='score'>Score: {count * 100}</h1>
              <input type="text" id='guess-input' value={inputValue} onChange={handleInputChange} />
              <Button handleAddTime={check}>Play</Button>
              <Button handleAddTime={getHint}>Hint</Button>
              <Button handleAddTime={()=> shuffle(scrambledWord)}>Shuffle</Button>
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
              <span className='performance-message'>{count > 5 ? 'Great attempt!': 'Better luck next time!'}</span>
              <span className='correct-answer-text'>The correct answer was <span className='highlight-color'>{randomWord1.toUpperCase()}</span></span>
              <span className='words-list-heading-text'>Your score was {count*100}</span>
              <span className='words-list-heading-text'>Here is a list of words you unscrambled:</span>
              <div className='letters-container2'>{correctWords.map(cw => (<span className='word-letters'>{cw}</span>))}</div>
              <Button handleAddTime={resetGame}>Play again</Button>
          </div>
      </section>
      
      
      </>
    )
  }
}

export default App
