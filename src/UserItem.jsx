function UserItem(props) {
    return (
      <div>
        <h3>{props.name}</h3>
        <p>{props.email}</p>
        <p>{props.age}</p>
        <p>{props.city}</p>
        <p>{props.phoneNumber}</p>

      </div>
    );
  }
  
  export default UserItem;