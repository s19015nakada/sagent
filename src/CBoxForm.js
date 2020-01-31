import React from 'react'

class CBoxForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = { check: true }
  }

  render () {
    return (
      <div>
        <form onSubmit={e => this.doSubmit(e)}>
          <label>
            <input
              type='checkbox'
              onChange={e => this.doChange(e)}
              checked={this.state.check}
            />
            食べる
          </label>
          <br />
          <input type='submit' value='決定' />
        </form>
      </div>
    )
  }

  doChange (e) {
    this.setState({
      check: !this.state.check
    })
  }

  doSubmit (e) {
    e.preventDefault()
    window.alert(this.state.check ? '食べる' : '食べない')
  }
}

export default CBoxForm
