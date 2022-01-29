export default function GroupListItem(props) {
  const { name, id, state, scenes } = props;


  return <div>
    <p>{`${name} / id: ${id}`}</p>
  </div>;
}