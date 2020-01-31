import React from 'react'

class TextAreaForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = { value: 'Hello' }
  }

  render () {
    return (
      <div>
        <form onSubmit={e => this.doSubmit(e)}>
          <textarea onChange={e => this.doChange(e)} value={this.state.value} />
          <br />
          <input type='submit' value='決定' />
        </form>
      </div>
    )
  }

  doChange (e) {
    const newValue = e.target.value
    this.setState({ value: newValue })
  }

  doSubmit (e) {
    e.preventDefault()
    window.alert(this.state.value)
  }
}

export default TextAreaForm
