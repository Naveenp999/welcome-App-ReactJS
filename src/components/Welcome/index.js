import './index.css'
import {Component} from 'react'

class Welcome extends Component {
  state = {subscription: false}

  func = prev => {
    const p = prev.subscription ? false : true
    return p
  }

  change = () => {
    this.setState(previousstate => ({
      subscription: this.func(previousstate),
    }))
  }
  render() {
    const {subscription} = this.state
    let note
    if (subscription) {
      note = 'subscribed'
    } else {
      note = 'subscribe'
    }
    const p = (
      <div className="container">
        <div className="sub-container">
          <h1 className="heading">Welcome</h1>
          <p className="description">Thank you! Happy Learning</p>
          <button className="button" onClick={this.change}>
            {note}
          </button>
        </div>
      </div>
    )
    return p
  }
}

export default Welcome
