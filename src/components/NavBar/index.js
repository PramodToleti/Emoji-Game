import './index.css'

const NavBar = props => {
  const {score, result, topScore} = props
  const showScores = () => {
    if (result === 'Win' || result === 'Lose') {
      return <p> </p>
    }
    return (
      <>
        <p className="nav-score-details">
          Score: <span className="user-score">{score}</span>
        </p>
        <p className="nav-score-details">
          Top Score: <span className="user-score">{topScore}</span>
        </p>
      </>
    )
  }
  return (
    <nav className="nav-bar">
      <div className="header">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
            className="emoji-logo"
          />
          <h1 className="logo-title">Emoji Game</h1>
        </div>
        <div className="score-container">{showScores()}</div>
      </div>
    </nav>
  )
}

export default NavBar
