import { Link } from "react-router-dom";

const ContactDetail = ({location}) => {
    const {contact} = location.state ;
    return (
        <section>
            <p>name is : {contact.Name}</p>
            <p>email is : {contact.Email}</p>
            <Link to="/">back</Link>
        </section>
    );
}
 
export default ContactDetail;