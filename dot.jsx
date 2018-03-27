var React = require('react')
var createReactClass = require('create-react-class')
var DotDescriptor = require('./dotDescriptor.jsx')

module.exports = createReactClass({
  getInitialState: () => ({hover: false, style: {}}),
  componentDidMount() {
    this.setState({
      style: this.props.dot.style
  });
  },
  onMouseEnter() {
    this.setState({
        hover: true,
        style: Object.assign({}, this.state.style, {border: '1px solid white'})
    });
  },
  onMouseLeave() {
    this.setState({
        hover: false,
        style: Object.assign({}, this.state.style, {border: '1px solid black'})
    });
  },
  render () {
    let dotDescriptor;
    if(this.state.hover){
      dotDescriptor = <DotDescriptor dot={this.props.dot}/>
    }
    return <span>
      <span onMouseEnter={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}
            style={this.state.style}/>
      {dotDescriptor}
    </span>
  }
})