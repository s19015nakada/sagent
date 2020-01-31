import React from 'react';
import CBoxForm from './CBoxForm'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  componentDidMount () {}

  render () {
    return (
      <div>
        <CBoxForm />
      </div>
    )
  }
}

export default App;
