import { useState, useEffect } from 'react'
import './App.css'
import Timer from './Timer.jsx'
import Button from './Button.jsx'
import Player from './Player.jsx'
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
      "apple", "grape", "bread", "chair", "table", "clock", "spoon", "glass", "plate", "phone",
      "mouse", "piano", "plant", "cable", "shirt", "pants", "shoes", "dress", "pouch", "brush",
      "purse", "broom", "alarm", "light", "drive", "drink", "pizza", "bagel", "lemon", "berry",
      "truck", "frame", "photo", "paint", "block", "beach", "water", "straw", "rugby", "score",
      "teach", "paper", "music", "beard", "grill", "salad", "floor", "couch", "scarf", "sword",
      "candy", "swing", "fries", "lunch", "bench", "train", "coast", "house", "brick", "snake",
      "shark", "badge", "glove", "razor", "plane", "stair", "chalk", "towel", "tiger", "peach",
      "leash", "match", "liver", "frank", "cycle", "scoop", "vocal", "crate", "globe", "crown",
      "mower", "radio", "angel", "fruit", "grain", "flask", "blend", "timer", "gravy", "onion",
      "shelf", "linen", "pasta", "trunk", "spool", "flute", "write", "shade", "valve", "trail",
      "booth", "panel", "brake", "crane", "pearl", "press", "angle", "pearl", "flask", "score",
      "booth", "panel", "grill", "watch", "shade", "press", "valve", "wrist", "shock", "cider",
      "flare", "slice", "stone", "storm", "guard", "sword", "table", "cargo", "quiet", "crisp",
      "scent", "smoke", "flame", "shine", "weave", "snail", "field", "ridge", "trail", "spark",
      "cloud", "flour", "serve", "stove", "blame", "crash", "grove", "harsh", "nurse", "slope",
      "trace", "pitch", "dough", "frost", "petal", "bloom", "blend", "chess", "curve", "flock",
      "stack", "frank", "blush", "query", "spear", "vivid", "blend", "relax", "spine", "spray",
      "bride", "moist", "crisp", "joint", "lease", "crawl", "sweep", "swell", "rider", "taste",
      "climb", "spoon", "spoke", "pride", "grove", "thief", "torch", "globe", "couch", "alarm",
      "crane", "pouch", "frame", "snack", "trout", "grind", "clerk", "paint", "stair", "floor",
      "blink", "grape", "broom", "stool", "pride", "shift", "brave", "thumb", "toast", "grape",
      "wrist", "smile", "shine", "proud", "groom", "baker", "drain", "flood", "stick", "cross",
      "slide", "track", "shock", "wrath", "whale", "flute", "prune", "tread", "groan", "rival",
      "scout", "sheep", "stalk", "flash", "trace", "spade", "crate", "grind", "glide", "clown",
      "feast", "bloom", "slate", "cheer", "flash", "shout", "fever", "grill", "brisk", "flute",
      "skate", "spout", "crane", "flock", "shine", "groan", "flask", "catch", "prove", "blaze",
      "spray", "chill", "broth", "crest", "stake", "frown", "crust", "shrub", "greet", "swing",
      "clash", "flesh", "blend", "frown", "slope", "spine", "brush", "straw", "drive", "teach",
      "mower", "blend", "shear", "crane", "spark", "grave", "thigh", "plaza", "feast", "catch",
      "spike", "brisk", "nudge", "broil", "ranch", "grove", "wring", "scorn", "drown", "crest"
  ]
    // Level 6-20 words
    const words2 = [
      "picture", "morning", "kitchen", "address", "backpack", "battery", "bedroom", "blanket",
      "cabinet", "carwash", "ceiling", "chicken", "cleaner", "closets", "clothes", "cupcake",
      "curtain", "disease", "doorway", "drawers", "dustbin", "evening", "eyebrow", "flowers",
      "grocery", "haircut", "highway", "iceberg", "kettle", "library", "mailbox", "monitor",
      "notepad", "parking", "pencil", "printer", "receipt", "sandals", "scanner", "soapbox",
      "stadium", "stapler", "station", "sunrise", "tissues", "toaster", "traffic", "umbrella",
      "vacuum", "waiting", "wardrobe", "weekend", "windows", "account", "alcohol", "amazing",
      "article", "balloon", "bananas", "banking", "barrier", "baskets", "battery", "blanket",
      "bottles", "builder", "buttons", "cabinet", "calling", "cameras", "caravan", "carpets",
      "cartoon", "catalog", "ceiling", "central", "ceramic", "chances", "chicken", "cleaner",
      "classes", "cleaned", "closets", "clothes", "coffees", "college", "cooking", "copying",
      "correct", "cotton", "counter", "cupcake", "curtain", "dancers", "decides", "default",
      "defense", "density", "deserts", "despite", "details", "devices", "diamond", "digital",
      "discuss", "disease", "dislike", "display", "doorway", "drawing", "drawers", "drivers",
      "dustbin", "earring", "editors", "efforts", "evening", "eyebrow", "fashion", "feather",
      "figures", "flowers", "freedom", "freezer", "friends", "gaining", "gardens", "grocery",
      "haircut", "hangers", "heading", "healthy", "hearing", "holiday", "horizon", "iceberg",
      "impress", "improve", "include", "indoors", "insight", "instant", "kettle", "kitchen",
      "laptops", "laundry", "library", "luggage", "mailbox", "married", "matches", "maximum",
      "meaning", "meeting", "members", "message", "monitor", "morning", "muscles", "napkins",
      "natural", "necklace", "network", "notepad", "numbers", "opening", "package", "parking",
      "partner", "passage", "pencils", "perfect", "perform", "phones", "picture", "plastic",
      "playing", "pleased", "pockets", "popular", "posters", "pottery", "printer", "privacy",
      "produce", "project", "protect", "pudding", "purpose", "pushing", "receipt", "regular",
      "related", "removed", "replace", "rescue", "respect", "resting", "rewards", "ringing",
      "roadway", "roasted", "running", "sandals", "scanner", "schools", "scratch", "seasons",
      "seating", "service", "shampoo", "sharing", "shaving", "shelter", "shorter", "shouted",
      "signing", "silence", "sitting", "skating", "smiling", "soapbox", "someone", "speaker",
      "special", "stadium", "stapler", "station", "staying", "storage", "student", "subjects",
      "subways", "sunrise", "sweater", "systems", "t-shirts", "teacher", "teaching", "testing",
      "theatre", "thought", "tissues", "toaster", "tourism", "towards", "traffic", "travels",
      "treating", "trouble", "trucks", "turning", "umbrella", "unicorn", "updates", "upwards",
      "useful", "vacancy", "vacuum", "variety", "venture", "village", "waiting", "walking",
      "wardrobe", "watches", "weekend", "whisper", "windows", "winning", "without", "workers",
      "writing", "written", "yelling", "yellow", "yogurt", "zippers", "zealous", "zooming",
      "absence", "ballast", "beating", "brother", "cabbage", "caramel", "certain", "channel",
      "charity", "chemist", "chiming", "choices", "citizen", "climate", "colleagues", "compact",
      "complex", "contact", "content", "control", "cooking", "counter", "courage", "couple",
      "crucial", "culture", "cupcake", "current", "curtain", "cutting", "dealing", "decades",
      "decided", "default", "defense", "density", "despite", "desktop", "diamond", "digital",
      "discuss", "display", "drivers", "earring", "efforts", "elderly", "emotion", "emperor",
      "evening", "fashion", "feeding", "feather", "fiction", "figured", "finance", "freedom",
      "freezer", "friends", "gaining", "gardens", "general", "genuine", "glasses", "growing",
      "hangers", "heading", "healthy", "holiday", "housing", "iceberg", "improve", "include",
      "indoors", "instant", "kitchen", "laptops", "laundry", "library", "luggage", "mailbox",
      "matches", "meeting", "members", "monitor", "morning", "muscles", "natural", "network",
      "notepad", "opening", "package", "parking", "partner", "passage", "perfect", "perform",
      "plastic", "playing", "popular", "pottery", "produce", "project", "protect", "pudding",
      "purpose", "regular", "related", "removed", "replace", "rescue", "respect", "resting",
      "ringing", "roadway", "running", "schools", "scratch", "service", "shampoo", "sharing",
      "shaving", "shelter", "shorter", "silence", "skating", "smiling", "someone", "speaker",
      "special", "stadium", "station", "storage", "student", "sunrise", "teacher", "testing",
      "theatre", "tissues", "traffic", "turning", "updates", "useful", "vacancy", "waiting",
      "walking", "wardrobe", "weekend", "windows", "writing", "yellow", "absence", "certain",
      "choices", "climate", "control", "current", "diamond", "digital", "drivers", "elderly",
      "emotion", "finance", "general", "genuine", "growing", "healthy", "holiday", "include",
      "instant", "matches", "natural", "perfect", "plastic", "project", "rescue", "respect",
      "running", "schools", "service", "silence", "someone", "special", "station", "student",
      "sunrise", "theatre", "traffic", "updates", "walking", "weekend", "writing"
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
    var [count, setCount] = useState(0)
    const [inputValue, setInputValue] = useState("")
    const [scrambledWord, setScrambledWord] = useState("")
    const [scrambledWordArray, setScrambledWordArray] = useState([])
    const [correctWords, setCorrectWords] = useState([])
    const [hintCount, setHintCount] = useState(3)
    const [isPlaying, setIsPlaying] = useState(false);
    const [player, setPlayer] = useState("Player")
    const [highScore, setHighScore] = useState(false)
    var leaderboardList = JSON.parse(localStorage.getItem("leaderboard"))
    const [leaderBoard, setLeaderBoard] = useState([])
    const [hintPressed, setHintPressed] = useState(false)
    let backgroundSound
    
    function playerClass(a){
      let playerStyle = {
        position: 'absolute', /* Make the cards overlap */
        zIndex: `${leaderBoard.length - a}`, /* Base z-index */
        '--offset': `${a * 40}px`,
        '--offset2': `${a * 50}px`,
        top: 0,
        height: 'auto',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'start',
        alignItems: 'center',
        borderRadius: '2rem',
        border: 'solid 2px #3C3B3B',
        backgroundColor: '#FFEBCD',
        color: "#3C3B3B", fontFamily: '"Jaini Purva", system-ui', fontStyle: 'normal', fontWeight: '400'

      }
      if(a === 0){
        playerStyle = {
        ...playerStyle,
        backgroundColor: '#7AA497',
        color: "#FFEBCD"
        //boxShadow: 'brown 0 0 100px 20px'
        }
      }
      else if(a === 1){
        playerStyle = {
          ...playerStyle,
          backgroundColor: '#FF8B5E',
          color: "#FFEBCD"
          //boxShadow: 'green 0 0 50px 20px'
          }
      }
      else if(a === 2){
        playerStyle = {
          ...playerStyle,
          backgroundColor: '#CAB3B7',
          color: "#FFEBCD"
          }
      }
      return playerStyle
    }

    useEffect(() => {
      shuffleCorrectWords(correctWords)
      if (timer === 0) {
        const newPlayer = { name: player, score: count * 100 };
    
        setLeaderBoard((prevLeaderBoard) => {
          const updatedLeaderboard = [...prevLeaderBoard];
          if (updatedLeaderboard.length < 10) {
            updatedLeaderboard.push(newPlayer);
          } else {
            for (let i = 0; i < updatedLeaderboard.length; i++) {
              if (newPlayer.score > updatedLeaderboard[i].score) {
                updatedLeaderboard.splice(i, 0, newPlayer);
                break;
              }
            }
            updatedLeaderboard.length = 10;
          }
          updatedLeaderboard.sort((a, b) => b.score - a.score);
          localStorage.setItem("leaderboard", JSON.stringify(updatedLeaderboard));
    
          return updatedLeaderboard;
        });
      }
    }, [timer]);

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
    function handleNameChange(event){
      setPlayer(event.target.value)
    }

    function playSound(){
      if(!backgroundSound){
        backgroundSound = new Audio(mySound)
        backgroundSound.loop = true;
      }
      if (!isPlaying) {
        backgroundSound.play().catch(error => {
        console.error('Error playing sound:', error);
        });
        setIsPlaying(true);
        console.log("isplaying is true now")
      }
      else{
        setIsPlaying(false)
        backgroundSound.pause()
        console.log("isplaying is false now")
      }
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
    const colors = ["#FFA785", "#7AA497", "#D2CF8A", "#96856A", "#8795A9", "#A987A4", "C9C22F", "A98787"]

    function colorRandom(a){
      let randomIndex = Math.floor(Math.random(a)*a.length)
      let randomColor = a[randomIndex]
      let colorStyle = {backgroundColor: `${randomColor}`, borderRadius: "2rem", boxShadow: "3px 4px 0 #3C3B3B", color: "#FFEBCD", fontFamily: '"Jaini Purva", system-ui', fontStyle: 'normal', fontWeight: '400'}
      return colorStyle
    }

    function resetGame(){
      setTimer(60)
      setCount(0)
      setHintCount(3)
      setCorrectWords([])
      setInputValue("")
      setHighScore(false)
      console.log(leaderBoard);
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
    function shuffleCorrectWords(array){
      for (let i = array.length - 1; i > 0; i--) {
        // Pick a random index from 0 to i
        const j = Math.floor(Math.random() * (i + 1));
        // Swap array[i] with the element at random index j
        [array[i], array[j]] = [array[j], array[i]];
      }
    }

    //Hint function
    function getHint(){
      var audio = new Audio(hintSound)
      var errorSound = new Audio(incorrectSound)
      if(hintCount > 0 && !hintPressed){
        hintText.innerHTML = `<span style="color: #3C3B3B; font-family:"Jaini Purva", system-ui">The first three letters are <span style='color:#FF8B5E'>${(randomWord1.slice(0,3)).toUpperCase()}</span></span>`
        setHintCount(h => h - 1)
        setHintPressed(true)
        audio.play()
      }
      else if(hintCount == 0){
        hintText.innerHTML = `<span style="color: #3C3B3B;">You have exhausted your hints</span>`
        errorSound.play()
      }
      else if(hintPressed){
        hintText.innerHTML = `<span style="color: #3C3B3B; font-family:"Jaini Purva", system-ui">The first three letters are <span style='color:#FF8B5E'>${(randomWord1.slice(0,3)).toUpperCase()}</span></span>`
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
        setTimeout(()=>{document.getElementById("guess-input").style.boxShadow = 'green 0 0 100px 20px'}, 0)
        setTimeout(()=>{document.getElementById("guess-input").style.boxShadow = 'none'}, 100)
        if(hintPressed){
          setHintPressed(false)
        }
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
        setTimeout(()=>{document.getElementById("guess-input").style.boxShadow = 'green 0 0 100px 20px'}, 0)
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
        setTimeout(()=>{document.getElementById("guess-input").style.boxShadow = 'green 0 0 100px 20px'}, 0)
        setTimeout(()=>{document.getElementById("guess-input").style.boxShadow = 'none'}, 100)
      }
      else{
        var audio = new Audio(incorrectSound)
        console.log("wrong attempt")
        audio.play()
        //hintText.innerHTML = `<span style="color: red;">Wrong attempt</span>`
        setTimeout(()=>{document.getElementById("guess-input").style.boxShadow = 'red 0 0 100px 20px'}, 0)
        setTimeout(()=>{document.getElementById("guess-input").style.boxShadow = 'none'}, 100)
      }
      
    }
  if(timer > 0){
    return (
      <>
         <section className='game-area'>
          <div className='game-area-container'>
            <div><Player name={player} onChange={handleNameChange}/></div>
            <Timer timer={timer}/>
            <div className='letters-container'>{scrambledWordArray.map((letter, index) => (<div key={index} className='word-letters' onClick={()=>{setInputValue(prevValue => prevValue + letter)}}>{letter.toUpperCase()}</div>))}</div>
            <span id='hint-text'></span>
            <div className='butons-div'>
              <div className='hint-count'>{hintCount}</div>
              <Button handleAddTime={getHint} handleClass='special-button'><i class="fa-regular fa-lightbulb"></i></Button>
              <Button handleAddTime={()=> shuffle(scrambledWord)} handleClass='special-button'><i class="fa-solid fa-shuffle"></i></Button>
              <Button handleAddTime={playSound} handleClass='special-button'><i class="fa-solid fa-music"></i></Button>
            </div>
            <span className='score'>Score: {count * 100}</span>
            <input type="text" id='guess-input' value={inputValue} onChange={handleInputChange} />
            <Button handleAddTime={check} handleClass='play-button' style={{backgroundColor:'#3C3B3B'}}>Play</Button>
          </div>
         </section>
      </>
    )
  }
  else if(timer === 0 && highScore === false){

    return(
      <>
      <section className='game-area'>
          <div className='result-area-container'>
              <span className='performance-message'>{count > 10 ? 'Fantastic!': 'Better luck next time!'}</span>
              <span className='words-list-heading-text'>The correct answer was <span style={{color: '#FFA785'}}>{randomWord1.toUpperCase()}</span></span>
              <span className='words-list-heading-text'>Your score was <span style={{color: '#FFA785'}}>{count*100}</span>. Here is a list of words you unscrambled:</span>
              <div className='letters-container2'>{correctWords.map((cw,index) => (<span key={index} className='word-letters2' style={colorRandom(colors)}>{`${cw.charAt(0).toUpperCase()}` + `${cw.slice(1).toLowerCase()}`}</span>))}</div>
              <Button handleAddTime={resetGame} handleClass='play-button'>Play again</Button>
              <Button handleAddTime={()=>{
                setHighScore(true)
                console.log(leaderboardList)
                }} handleClass='play-button'>Go to leaderboards</Button>
          </div>
      </section>
      
      
      </>
    )
  }
  else if(timer === 0 && highScore === true){
    return(
      <>
        <section className='leaderboard-section'>
          <div className='leaderboard-area'>
            <span className='performance-message'>LEADERBOARD</span>
            <div className='leaderboard-heading'>
              <span className='heading-text'>Player</span>
              <span className='heading-text'>Score</span>
            </div>
            <div className='ranking' style={{height: `${(leaderboardList.length)* 3}rem`}}>
              {leaderboardList.map((lb, index) => (<div className='playerClass' style={playerClass(index)} key={index}>
                <div className='player-rank'><div className='rank-text'><span>{index + 1}</span></div></div>
                <div className='player-details'>
                  <span className='player-name'>{lb.name}</span>
                  <span className='player-score'>{lb.score}</span>
                </div>
              </div>))}
            </div>
            <div style={{marginTop:'2rem'}}><Button handleAddTime={resetGame} handleClass='play-button'>Play again</Button></div>
            
          </div>
          
        </section>
      </>
    )
  }
}

export default App
