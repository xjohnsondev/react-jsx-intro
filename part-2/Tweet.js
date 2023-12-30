const Tweet = (props) => {
  return (
    <div style={{ color: props.color }}>
      <h2>{props.username}</h2>
      <h3>{props.name}</h3>
      <h4>{props.date}</h4>
      <p>{props.message}</p>
    </div>
  );
};
