import Slider from 'react-input-slider';
import { useState } from 'react';
import CalculateBMI from './BMIForm';

const BMIForm = (props) => {

    const[ weight, setWeight ] = useState(20);
    const[ height, setHeight ] = useState(100);
    const [weightState] = useState({ x: 20, xmax: 300, xmin: 20 });
    const [heightState] = useState({ x: 100, xmax: 220, xmin: 100 });

    const submitHandler = (e) => {
        e.preventDefault();
        props.calcBMI(height,weight)
    }

    return (
        <form onSubmit={submitHandler}>
        <div className="weightInput">
          <label htmlFor="weightinput">Enter your weight (20kg - 300kg):</label>
          <input
            name="weightInput"
            type="number"
            min="20"
            max="300"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            />
          <div className='sliderValue'>
            <Slider
            axis="x"
            x={weight}
            xmax={weightState.xmax}
            xmin={weightState.xmin}
            onChange={({ x }) => setWeight(x)}
            />
            <h4 className='hwValue'>{weight}</h4>
          </div>  
        </div>
        <div className="heightInput">
          <label htmlFor="heightInput">Enter your height (100cm - 220cm):</label>
          <input
          name="heightInput"
          type="number"
          min="100"
          max="220"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          />
          <div className='sliderValue'>
            <Slider
            axis="x"
            x={height}
            xmax={heightState.xmax}
            xmin={heightState.xmin}
            onChange={({ x }) => setHeight(x)}
            />
            <h4 className='hwValue'>{height}</h4>
          </div>
        </div> 
        <div className='buttons'>
          <button type="submit">Calculate</button>
        </div>
      </form>
    )
}

export default BMIForm;