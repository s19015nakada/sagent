import React from 'react'
import TextAreaForm from './TextAreaForm'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  componentDidMount () {}

  render () {
    return (
      <div>
        <TextAreaForm />
      </div>
    )
  }
}

export default App;
