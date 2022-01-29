export default function ExpandedView({ id, selected, setSelected }) {

  function handleClick () {
    setSelected(id);
  }

  return(
    <button type="button" onClick={handleClick}>Expand</button>
  );
}