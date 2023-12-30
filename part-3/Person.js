const Person = (props) => {
  if (!props.age) return "Not a real person";
  let age = props.age;
  let name = props.name;
  let canVote = age >= 18 ? "Please go vote!" : "You must be 18.";

  return (
    <div>
      <p>Learn some information about this person.</p>
      <h2>
        {name} - age {age}
      </h2>
      <h3>{canVote}</h3>
      <p>Hobbies</p>
      <ul>
        {props.hobbies.map((h) => (
          <li>{h}</li>
        ))}
      </ul>
      <hr/>
    </div>
  );
};
