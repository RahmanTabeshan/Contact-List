import "./ContactList.css" ;
import Contact from "./Contact/Contact";
import { Link } from "react-router-dom";

const ContactList = ({contacts , onDelete}) => {
    return (
        <section className="contact-list">
            <button className="btn-link">
                <Link to="/Add" className="add">
                    Add Contact
                </Link>
            </button>
            {contacts.map(c => (
                <Contact key={c.id} contact={c} onDelete={()=>onDelete(c.id)} />
            ))}
        </section>
    );
}
 
export default ContactList;