import { Switch } from '@mui/material';
import './SliderButton.css'


export default function SliderButton(props) {
  const { handleClick, checked } = props

  return (
    <Switch 
      defaultChecked={checked}
      onClick={handleClick}
    />

    // <div className='button-container'>
    // <label className="switch">
    //   <input type="checkbox" onChange={handleClick} checked={checked}/>
    //   <span className="slider round"></span>
    // </label>
    // </div>
  );
}
