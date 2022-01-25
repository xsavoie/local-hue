export default function Group({ name, lights }) {
  // console.log("lights", lights)
  return (
    <div>
      <p>group name: {name}</p>
      <p>lights {lights.join(' ')}</p>
    </div>
  );
}
