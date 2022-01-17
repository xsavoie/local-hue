import './SliderButton.css'


export default function SliderButton(props) {
  const { handleClick } = props

  return (
    // <div className='button-container'>
    <label className="switch">
      <input type="checkbox" onClick={handleClick} />
      <span className="slider round"></span>
    </label>
    // </div>
  );
}
