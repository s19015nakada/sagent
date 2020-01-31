import React from 'react';
import TextForm from './TextForm'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  componentDidMount () {}

  render () {
    return (
      <div>
        <TextForm />
      </div>
    )
  }
}

export default App;
