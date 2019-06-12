import React, { Component} from 'react'
import ReactDOM from 'react-dom'

class Layout extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Abisai'
    }
  }

  render () {
    return (<img src="/img/bape.png" />
      <div>Hey</div>
    )
  }
}

const app = document.getElementById('app')

ReactDOM.render(<Layout />, app)
