import './index.css'

const WinOrLoseCard = props => {
  const {result, score, topScore, reloadGame} = props

  const replayGame = () => {
    reloadGame()
  }

  if (result === 'Win') {
    return (
      <div className="win-lose-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
          alt="win or lose"
          className="result-image"
        />
        <div className="result-body">
          <img
            src="https://res.cloudinary.com/dlpgowt5s/image/upload/v1669900423/icons8-kiss-64_jwdcfl.png"
            alt="emoji"
            className="background-emoji kiss"
          />
          <img
            src="https://res.cloudinary.com/dlpgowt5s/image/upload/v1669900623/icons8-sad-face-64_w4exho.png"
            alt="emoji"
            className="background-emoji sad"
          />
          <img
            src="https://res.cloudinary.com/dlpgowt5s/image/upload/v1669900824/icons8-fat-emoji-100_hzymgr.png"
            alt="emoji"
            className="background-emoji fat"
          />
          <img
            src="https://res.cloudinary.com/dlpgowt5s/image/upload/v1669909345/icons8-shocker-emoji-100_rjjzc5.png"
            alt="emoji"
            className="background-emoji shocker"
          />
          <h1 className="result-text">You Won</h1>
          <p className="score-details">Best Score</p>
          <p className="score">{topScore}/12</p>
          <button className="play-again-btn" type="button" onClick={replayGame}>
            Play Again
          </button>
        </div>
      </div>
    )
  }
  return (
    <div className="win-lose-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
        alt="win or lose"
        className="result-image"
      />
      <div className="result-body">
        <img
          src="https://res.cloudinary.com/dlpgowt5s/image/upload/v1669900423/icons8-kiss-64_jwdcfl.png"
          alt="emoji"
          className="background-emoji kiss"
        />
        <img
          src="https://res.cloudinary.com/dlpgowt5s/image/upload/v1669900623/icons8-sad-face-64_w4exho.png"
          alt="emoji"
          className="background-emoji sad"
        />
        <img
          src="https://res.cloudinary.com/dlpgowt5s/image/upload/v1669900824/icons8-fat-emoji-100_hzymgr.png"
          alt="emoji"
          className="background-emoji fat"
        />
        <img
          src="https://res.cloudinary.com/dlpgowt5s/image/upload/v1669909345/icons8-shocker-emoji-100_rjjzc5.png"
          alt="emoji"
          className="background-emoji shocker"
        />
        <h1 className="result-text">You Lose</h1>
        <p className="score-details">Score</p>
        <p className="score">{score}/12</p>
        <button className="play-again-btn" type="button" onClick={replayGame}>
          Play Again
        </button>
      </div>
    </div>
  )
}

export default WinOrLoseCard
