import React, { useState } from 'react';
import Orderplaced from './Orderplaced';
function Theme(props) {
  const [isVisible, setIsVisible] = useState(true);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  const clickme = () => {
    setIsVisible(!isVisible);
    // alert("Your order is Confirmed");
    setIsOrderPlaced(true);
    // {<Orderplaced/>}
  };
  const clickmeonce = () => {
    setIsVisible(!isVisible);
  };

  const { title, price, description, imageurl, rating, count } = props;

  return (
    <div>
      {isOrderPlaced && <Orderplaced />}
      <div className={`d-flex px-2 mp ${isVisible ? 'visible' : 'invisible'}`} id='lelobhai'>
        <form action="" className='mhead'>
          <h1 className="mainhead">Order Confirmation</h1>
          <p>
            Name: <input type="text" name="name" placeholder="Enter your name" />
          </p>
          <p>
            Email: <input type="email" name="email" id="email" placeholder='example@gmail.com' />
          </p>
          <p>
            Contact : <input type="phone" name="phone" id="pincode" placeholder='9898******' />
          </p>
          <p>
            Quantity: <input type="range" name="gender" id="male" />
          </p>
          <p>
            Payment :  
            <select name="" id="">
              <option value="">SELECT</option>
              <option value="">UPI</option>
              <option value="">ATM</option>
              <option value="">DEBIT CARD</option>
              <option value="">CREDIT CARD</option>
            </select>
          </p>
          <p>
            Feedback: <textarea name="" id="" cols="40" rows="3" placeholder='Write your Feedback about our website and your experience'></textarea>
          </p>
          <p>
            <div className='btn btn-danger' name="submit" id="submit" onClick={clickme}>CONFIRM & PLACE</div>
          </p>
          <p>
            <a to="/" className='btn btn-success' onClick={clickmeonce}>X</a>
          </p>
        </form>
      </div>
      
    </div>
  );
}

export default Theme;
