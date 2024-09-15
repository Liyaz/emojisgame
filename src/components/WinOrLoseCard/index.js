// Write your code here.
import './index.css'

const won = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
const lose = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

const WinOrLoseCard = props => {
  const {isWon, score, onReset} = props

  const status = isWon ? 'You Won' : 'You Lose'
  const bestCom = isWon ? 'Best Score' : 'Score'
  const img = isWon ? won : lose

  return (
    <div className="resCard">
      <div className="card-sep">
        <div>
          <h1 className="head">{status}</h1>
          <p className="para">{bestCom}</p>
          <p className="score">{score}/12</p>
          <button type="button" className="playButton" onClick={onReset}>
            Play Again
          </button>
        </div>
        <img src={img} className="resImg" alt="win or lose" />
      </div>
    </div>
  )
}
export default WinOrLoseCard
