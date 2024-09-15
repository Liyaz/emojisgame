// Write your code here.
import './index.css'

const NavBar = props => {
  const {topScore, currentScore, winorlossCards} = props
  return (
    <div className="navBg shadow">
      <div className="navEl">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="navImg"
        />
        <h1 className="navPara1">Emoji Game</h1>
      </div>
      {winorlossCards && (
        <div className="navEl">
          <p className="navPara2">Score: {currentScore}</p>
          <p className="navPara3">Top Score: {topScore}</p>
        </div>
      )}
    </div>
  )
}
export default NavBar
