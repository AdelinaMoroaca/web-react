function UserItem(props) {
    return (
      <div>
        <h3>{props.name}</h3>
        <p>{props.email}</p>
      </div>
    );
}

function FruitItem(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      {/* // Component used in this context only */}
      <Dot/>
      <p>{props.kg}</p>
    </div>
  );
}

function Dot() {
  return (
  <div style={{
    width: 10,
    height: 10,
    borderRadius: "50%",
    backgroundColor: "red",
  }}
  ></div>
  );
}
// first mode of exporting:
// export default UserItem;
// export { FruitItem };

//second mode of exporting
export { FruitItem, UserItem };
