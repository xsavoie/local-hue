import "./styles/GroupExpanded.css";

export default function GroupExpanded({ selected, setSelected }) {
  return (
    <div className="group-expanded">
      <header className="expanded--header">
        <p>Expanded view!</p>
        <button type="button" onClick={() => setSelected("")}>
          &times;
        </button>
      </header>
    </div>
  );
}
