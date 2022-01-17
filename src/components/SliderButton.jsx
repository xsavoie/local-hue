import './SliderButton.css'


export default function SliderButton(props) {
  const { handleClick, checked } = props

  return (
    // <div className='button-container'>
    <label className="switch">
      <input type="checkbox" onChange={handleClick} checked={checked}/>
      <span className="slider round"></span>
    </label>
    // </div>
  );
}
