import "./Contact.css" ;
import { Link } from "react-router-dom";
import User from "../../../assets/image/User.png" ;

const Contact = ({contact , onDelete}) => {

    const {Name , Email , id} = contact ;
    
    return (
        <div className="item">
            <div className="user">
                <Link to={{pathname: `/User/${id}` , state:{contact : contact}}}>
                    <img src={User} alt="user" />
                </Link>
                <div>
                    <p>{Name}</p>
                    <p>{Email}</p>
                </div>
            </div>
            <div className="btns">
                <Link to={`/Edit/${id}`} className="btn-edit" >
                    Edit 
                </Link>
                <button className="btn btn-delete" onClick={onDelete} >Delete</button>
            </div>
        </div>
    );
}
 
export default Contact;