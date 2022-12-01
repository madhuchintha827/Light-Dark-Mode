// Write your code here

import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  onLightMode = () => {
    const {isDarktMode} = this.state
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    const bgTheam = isDarkMode ? 'dark-mode' : 'light-mode'
    const btnText = isDarkMode ? 'light Mode' : 'Dark Mode'

    return (
      <div className="container">
        <div className={bgTheam}>
          <h1 className="heading">Click To Change Mode</h1>
          <button className="button" type="button" onClick={this.onLightMode}>
            {btnText}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
