import './ContactsBook.css';

function ContactsBook(props) {
    return (
      <div id = 'contactsBook'>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
      </div>
    );
  }
  
export default ContactsBook;