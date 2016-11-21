const React = require ('react')

class DumbComponent extends React.Component{
  constructor(props) {
    super(props);
      this.state = {mood: 'happy'}

  this.handleClick = this.handleClick.bind(this)
  }


  handleClick(){
    if (this.state.mood === 'happy'){
      this.setState({mood: 'sad'})
    }if (this.state.mood === 'sad'){
      this.setState({mood: 'happy'})
    }
  }

  render(){
    return(
      <div onClick={this.handleClick}>
      {this.state.mood}
      </div>
      )
  }
}


module.exports = DumbComponent;
