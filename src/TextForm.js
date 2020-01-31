import React from 'react'

class TextForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }
  }
  componentDidMount () {}

  render () {
    return (
      <div>
        <form onSubmit={e => this.doSubmit(e)}>
          <input
            type='text'
            onChange={e => this.doChange(e)}
            value={this.state.value}
          />
          <input type='submit' />
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
export default TextForm
