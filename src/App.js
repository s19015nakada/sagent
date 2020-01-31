import React from 'react';
import jsonp from 'fetch-jsonp'

const getJSON = async uri => {
  const result = await jsonp(uri).then(res => res.json())
  return result
}

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = { items: {} }
  }
  componentDidMount () {
    getJSON('http://geoapi.heartrails.com/api/json?method=getAreas&jsonp').then(
      json => this.setState({ items: json })
    )
  }

  render () {
    console.log(this.state)
    return <div>test</div>
  }
}

export default App;
