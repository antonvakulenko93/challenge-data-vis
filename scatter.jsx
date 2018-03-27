var React = require('react')
var linmap = require('linmap')
var jsonist = require('jsonist')
var createReactClass = require('create-react-class')
var Dot = require('./dot.jsx')

const colors = {
  virginica: 'blue',
  versicolor: 'green',
  setosa: 'orange'
}

const wrapperStyle = {
  'position': 'relative',
  'color':'rgba(255, 255, 255, 0.7)',
  'background':'#222',
  'border':'1px solid black',
  'boxShadow':'0px 3px 8px rgba(0, 0, 0, 0.5)',
}

const dotStyle = {
  'width' :'10px',
  'height' :'10px',
  'position' :'absolute',
  'cursor' :'pointer',
  'borderRadius':'5px',
  'border': '1px solid black'
}

function getDotStyle(dot, {width, height}){
  return Object.assign({
    left: `${linmap(additionalData.minWidth, additionalData.maxWidth, 0, 1, dot.petalWidth) * width - 5 }px`,
    bottom: `${linmap(additionalData.minLength, additionalData.maxLength, 0, 1, dot.petalLength) * height - 5}px`,
    background: colors[dot.species]
  }, dotStyle)
}

const additionalData = {
  maxWidth: -Infinity,
  maxLength: -Infinity,
  minWidth: Infinity,
  minLength: Infinity
};

module.exports = createReactClass({
  getInitialState: () => ({dataset: [], wrapperStyle: {}}),
  componentWillMount() {
    jsonist.get(this.props.dataset, (err, data) => {
      data.forEach(dot => {
        additionalData.maxWidth = Math.max(dot.petalWidth, additionalData.maxWidth);
        additionalData.maxLength = Math.max(dot.petalLength, additionalData.maxLength);
        additionalData.minLength = Math.min(dot.petalLength, additionalData.minLength);
        additionalData.minWidth = Math.min(dot.petalWidth, additionalData.minWidth);
      })
      data.forEach(dot => {
        dot.style = getDotStyle(dot, this.props);
      })
      this.setState({ dataset: data,
                      wrapperStyle: Object.assign({ width: this.props.width, height: this.props.height }, wrapperStyle) });
    })
  },
  render () {
    return <div style={this.state.wrapperStyle}> {this.state.dataset.map((dot, index) =>
      <Dot dot={dot} key={index}/>)} 
    </div>
  }
})