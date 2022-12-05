import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

const emojisList = [
  {
    id: 0,
    emojiName: 'Face with stuck out tongue',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-img.png',
  },
  {
    id: 1,
    emojiName: 'Face with head bandage',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-head-bandage-img.png',
  },
  {
    id: 2,
    emojiName: 'Face with hugs',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-hugs-img.png',
  },
  {
    id: 3,
    emojiName: 'Face with laughing',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-img.png',
  },
  {
    id: 4,
    emojiName: 'Laughing face with hand in front of mouth',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-with-hand-infront-mouth-img.png',
  },
  {
    id: 5,
    emojiName: 'Face with mask',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-mask-img.png',
  },
  {
    id: 6,
    emojiName: 'Face with silence',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-silence-img.png',
  },
  {
    id: 7,
    emojiName: 'Face with stuck out tongue and winked eye',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-and-winking-eye-img.png',
  },
  {
    id: 8,
    emojiName: 'Grinning face with sweat',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/grinning-face-with-sweat-img.png',
  },
  {
    id: 9,
    emojiName: 'Smiling face with heart eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-heart-eyes-img.png',
  },
  {
    id: 10,
    emojiName: 'Grinning face',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/grinning-face-img.png',
  },
  {
    id: 11,
    emojiName: 'Smiling face with star eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-star-eyes-img.png',
  },
]

class EmojiGame extends Component {
  state = {
    emojiIconsList: emojisList,
    userClickedList: [],
    score: 0,
    topScore: 0,
    win: false,
    lose: false,
    reload: false,
  }

  reloadGame = () => {
    const {score, topScore} = this.state
    if (score > topScore) {
      this.setState(prevState => ({
        reload: !prevState.reload,
        score: 0,
        topScore: score,
        userClickedList: [],
        win: false,
        lose: false,
      }))
    } else {
      this.setState(prevState => ({
        reload: !prevState.reload,
        score: 0,
        userClickedList: [],
        win: false,
        lose: false,
      }))
    }
  }

  showEmojis = () => {
    const {emojiIconsList, win, lose, score, topScore, reload} = this.state
    if (win) {
      return (
        <>
          <NavBar result="Win" topScore={topScore} />
          <div className="result-container">
            <WinOrLoseCard
              result="Win"
              topScore={topScore}
              reloadGame={this.reloadGame}
            />
          </div>
        </>
      )
    }
    if (lose === true) {
      return (
        <>
          <NavBar result="Lose" />
          <div className="result-container">
            <WinOrLoseCard
              result="Lose"
              score={score}
              reloadGame={this.reloadGame}
            />
          </div>
        </>
      )
    }
    if (reload && win === false && lose === false) {
      return (
        <>
          <img
            src="https://res.cloudinary.com/dlpgowt5s/image/upload/v1669905209/3d-fluency-camera-icon_vxntuv.png"
            alt="background icon"
            className="background-icon-1"
          />
          <img
            src="https://res.cloudinary.com/dlpgowt5s/image/upload/v1669904079/3d-casual-life-like_lxgimy.png"
            alt="background icon"
            className="background-icon-2"
          />
          <NavBar score={score} topScore={topScore} />
          <div className="emoji-game-body">
            <ul className="emoji-container">
              {emojiIconsList.map(each => (
                <EmojiCard
                  emojiDetails={each}
                  key={each.id}
                  shuffledEmojisList={this.shuffledEmojisList}
                />
              ))}
            </ul>
          </div>
        </>
      )
    }
    return (
      <>
        <NavBar score={score} topScore={topScore} />
        <div className="emoji-game-body">
          <img
            src="https://res.cloudinary.com/dlpgowt5s/image/upload/v1669905209/3d-fluency-camera-icon_vxntuv.png"
            alt="background icon"
            className="background-icon-1"
          />
          <img
            src="https://res.cloudinary.com/dlpgowt5s/image/upload/v1669904079/3d-casual-life-like_lxgimy.png"
            alt="background icon"
            className="background-icon-2"
          />
          <ul className="emoji-container">
            {emojiIconsList.map(each => (
              <EmojiCard
                emojiDetails={each}
                key={each.id}
                shuffledEmojisList={this.shuffledEmojisList}
              />
            ))}
          </ul>
        </div>
      </>
    )
  }

  shuffledEmojisList = id => {
    const {userClickedList} = this.state
    if (userClickedList.length === 11) {
      this.setState({
        win: true,
        topScore: 12,
      })
    }
    if (userClickedList.includes(id)) {
      this.setState({
        lose: true,
      })
    } else {
      this.setState(prevState => ({
        emojiIconsList: prevState.emojiIconsList.sort(
          () => Math.random() - 0.5,
        ),
        userClickedList: [...prevState.userClickedList, id],
        score: prevState.score + 1,
      }))
    }
  }

  render() {
    return <div className="bg-container">{this.showEmojis()}</div>
  }
}

export default EmojiGame
