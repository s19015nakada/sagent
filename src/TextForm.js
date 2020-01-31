import React from 'react'

class TextFrom extends React.Component {
  constructor (props) {
    super(props)
    this.state = { value: '' }
  }

  render () {
    return <div></div>
  }
  doChange (e) {
    const newValue = e.target.value
    this.setState({ value: newValue })
  }

  doSubmit (e) {}
}

class ActionForm extends React.Component {
  render () {}
}

export default TextFrom
