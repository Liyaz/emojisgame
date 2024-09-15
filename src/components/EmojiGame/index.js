/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import './index.css'
import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLossCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {winorlossCards: true, clickedEmojisList: [], topScore: 0}

  scores = currentScore => {
    const {topScore} = this.state
    let newScore = topScore

    if (currentScore > topScore) {
      newScore = currentScore
    }
    this.setState({
      topScore: newScore,
      winorlossCards: false,
    })
  }

  clickEmoji = id => {
    const {emojisList} = this.props
    const {clickedEmojisList} = this.state
    const isEmojiPresent = clickedEmojisList.includes(id)
    const clickedEmojiListLen = clickedEmojisList.length

    if (isEmojiPresent) {
      this.scores(clickedEmojiListLen)
    } else {
      if (emojisList.length - 1 === clickedEmojiListLen) {
        this.scores(emojisList.length)
      }
      this.setState(prevState => ({
        clickedEmojisList: [...prevState.clickedEmojisList, id],
      }))
    }
  }

  renderEmojis = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  emojisLis = () => {
    const shuffleList = this.renderEmojis()

    return (
      <ul className="unis">
        {shuffleList.map(each => (
          <EmojiCard
            emojiCard={each}
            key={each.id}
            clickEmoji={this.clickEmoji}
          />
        ))}
      </ul>
    )
  }

  onReset = () => {
    this.setState({
      clickedEmojisList: [],
      winorlossCards: true,
    })
  }

  resultCard = () => {
    const {emojisList} = this.props
    const {clickedEmojisList} = this.state
    const isWon = emojisList.length === clickedEmojisList.length

    return (
      <div>
        <WinOrLossCard
          isWon={isWon}
          score={clickedEmojisList.length}
          onReset={this.onReset}
        />
      </div>
    )
  }

  render() {
    const {topScore, clickedEmojisList, winorlossCards} = this.state
    const emojis = this.emojisLis()

    return (
      <div className="bgCont">
        <NavBar
          topScore={topScore}
          currentScore={clickedEmojisList.length}
          winorlossCards={winorlossCards}
        />
        <div>{winorlossCards ? emojis : this.resultCard()}</div>
      </div>
    )
  }
}
export default EmojiGame
