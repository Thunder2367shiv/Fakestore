import React, { Component } from 'react';
import Theme from './Orderform';

export class Newsitems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: false,
    };
  }

  clickme = () => {
    this.setState({ data: true });
  }

  render() {
    let { title, price, description, imageurl, rating, count } = this.props;
    return (
      <div>
        <div className="card border border-light rounded-2 bg-secondary" style={{ width: "25rem" }}>
          <img src={imageurl} height={300} className="card-img-top" alt="..." />
          <div className="btn btn-primary pe-none myfreestyle">Only {count} left</div>
          <div className='imagekabhatija'><p className="showmebaby">{description}....</p></div>
          <div className="card-body my-3 mx-3 px-3 py-3 bg-dark">
            <h5 className="card-title text-white text-center">{title}</h5>
            <div className="container d-flex justify-content-between">
              <div className="btn btn-success pe-none ">Rate: {rating}+</div>
              <div className="btn btn-danger pe-none px-5 py-2">Price: ${price}</div>
            </div>
            <br />
            <a to="/" target="_blank" className="btn btn-primary px-5 d-flex justify-content-center" id='lelobhai' onClick={this.clickme}>BUY</a>
            {
              this.state.data ? <Theme /> : null
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Newsitems;
