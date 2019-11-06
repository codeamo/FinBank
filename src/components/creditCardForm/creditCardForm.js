import React, {useState} from 'react';
import './creditCardForm.css'
import CardItem from '../cardItem/cardItem'
import '../../utils'

const CreditCardForm = () => {
  const [inputs, setInputs] = useState({});

  const handleInputChange = e => {
    e.persist();
    setInputs(inputs => ({...inputs, [e.target.name]: e.target.value}));
  }

  const handleSubmit = e => {
    e.preventDefault();    
    alert(`User Submitted: 
           Card Number: ${inputs.cardNumber}
           Card Name: ${inputs.cardName}
           Date: ${inputs.month}-${inputs.year}
           cvv: ${inputs.cvv}`)  
    setInputs('');
  }

  return (
    <div className="wrapper">
      <form className="card-form" onSubmit={handleSubmit}>
        <CardItem/>
        <label class="labeling">Card Number</label>
        <input className="cardNumber" type="tel" name="cardNumber" value={inputs.cardNumber} onChange={handleInputChange}></input>
        <label class="labeling">Card Name</label>
        <input className="cardName" type="text" name="cardName" value={inputs.cardName} onChange={handleInputChange}></input>
        <div className="row">
          <div className="col_date">
            <div className="group">
              <label class="labeling">Expiration Date</label>
              <select className="month" type="text" name="month" value={inputs.month} onChange={handleInputChange}>
                <option value disabled='disabled' selected='selected'>Month</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="8">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
              <select className="year" type="text" name="year" value={inputs.year} onChange={handleInputChange}>
                <option value disabled='disabled' selected='selected'>Year</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
                <option value="2029">2029</option>
                <option value="2030">2030</option>
              </select>
            </div> 
          </div>  
          <div className="col_cvv">
            <label class="labeling">CVV</label>
            <input className="cvv" type="text" name="cvv" value={inputs.cvv} onChange={handleInputChange}></input>
          </div>
        </div>
        <button type="submit">submit</button>
      </form>
   </div>
  )
}

export default CreditCardForm; 