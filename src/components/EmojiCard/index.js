// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiCard, clickEmoji} = props
  const {emojiUrl, emojiName, id} = emojiCard

  const onclickEmoji = () => {
    clickEmoji(id)
  }
  return (
    <li className="emojisCard">
      <button className="eCont" type="button">
        <img
          src={emojiUrl}
          alt={emojiName}
          className="emojiImg"
          onClick={onclickEmoji}
        />
      </button>
    </li>
  )
}

export default EmojiCard
