import './index.css'

const EmojiCard = props => {
  const {emojiDetails, shuffledEmojisList} = props
  const {emojiName, emojiUrl, id} = emojiDetails

  const onClickEmoji = () => {
    shuffledEmojisList(id)
  }

  return (
    <li>
      <button className="emoji-card" onClick={onClickEmoji} type="button">
        <img src={emojiUrl} alt={emojiName} className="emoji-icon" />
      </button>
    </li>
  )
}
export default EmojiCard
