import "./AddContact.css" ;
import { useState } from "react";
import { Link } from "react-router-dom";

const AddContact = ({contactHandler , history}) => {

    const [form,setForm] = useState({
        Name : '' ,
        Email : '' 
    })

    const changeHandler = (e)=>{
        setForm({...form , [e.target.name]:e.target.value}) ;
    }

    const AddContactHandler = (e) =>{
        e.preventDefault() ;
        if(!form.Name || !form.Email ){
            alert("مقادیر را وارد کنید") ;
            return ;
        }
        contactHandler(form) ;
        setForm({
            Name : '' ,
            Email : '' 
        })
        history.push("/") ;
    }

    return (
        <section className="add-contact">
            <button className="btn-link">
                <Link to="/" className="list">
                    Contact List
                </Link>
            </button>
            <form onSubmit={AddContactHandler}>
                <div className="form-control">
                    <label htmlFor="name">Name : </label>
                    <input type="text" id="name" name="Name" value={form.Name} onChange={changeHandler} />
                </div>
                <div className="form-control">
                    <label htmlFor="email">Email : </label>
                    <input type="text" id="email" name="Email" value={form.Email} onChange={changeHandler} />
                </div>
                <button className="btn btn-add" type="submit">Add Contact</button>
            </form>
        </section>
    );
}
 
export default AddContact;