import React, { Component } from 'react'
import loading from './icons8-tick.gif'
export class order extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showContent: false,
    };
  }

  componentDidMount() {
    // After 5000 milliseconds (5 seconds), update the state to show the content
    setTimeout(() => {
      this.setState({ showContent: true });
    }, 3000);
  }

  render() {
    return (
      <div className="text-center my-5">
        {!this.state.showContent ? (
          <div> 
            <img src={loading} alt="loading" className='rounded-5' />
          <div className="container text-white fs-3">ORDER DONE</div>
          </div>
        ) : null}
      </div>
    ) 
  }
}

export default order
