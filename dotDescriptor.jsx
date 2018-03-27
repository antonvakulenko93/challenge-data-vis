var React = require('react')
var createReactClass = require('create-react-class')

var style = {
  position: 'absolute',
  zIndex: 1,
  top: 0,
  left: 0,
  color: 'white'
}

module.exports = createReactClass({
  render () {
    return <div style={style}>
      <pre>species:      {this.props.dot.species}</pre>
      <pre>petalWidth:   {this.props.dot.petalWidth}</pre>
      <pre>petalLength:  {this.props.dot.petalLength}</pre>
      <pre>sepalWidth:   {this.props.dot.sepalWidth}</pre>
      <pre>sepalLength:  {this.props.dot.sepalLength}</pre>
    </div>
  }
})