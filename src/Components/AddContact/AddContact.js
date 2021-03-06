import "./AddContact.css" ;
import { useState } from "react";
import { Link } from "react-router-dom";
import { addUser } from "../../Services/actionData";

const AddContact = ({history}) => {

    const [form,setForm] = useState({
        Name : '' ,
        Email : '' 
    })

    const changeHandler = (e)=>{
        setForm({...form , [e.target.name]:e.target.value}) ;
    }

    const AddContactHandler = async (e) =>{
        e.preventDefault() ;
        if(!form.Name || !form.Email ){
            alert("مقادیر را وارد کنید") ;
            return ;
        }
        const added = {id:Math.floor(Math.random()*1000000000) , ...form} ;
        try {
            await addUser(added) ;
            setForm({
                Name : '' ,
                Email : '' 
            })
            history.push("/") ;
        } catch (error) {
            console.log(error) ;
        }
    }

    return (
        <section className="add-contact">
            <div className="add-header">
                <h2>Add Contact</h2>
                <Link to="/" className="list">
                    Contact List
                </Link>
            </div>
            
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