import "../AddContact/AddContact.css" ;
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { editUser, getOneUser } from "../../Services/actionData";

const EditContact = ({ match , history}) => {

    const [form,setForm] = useState({
        Name : '' ,
        Email : '' 
    })

    const changeHandler = (e)=>{
        setForm({...form , [e.target.name]:e.target.value}) ;
    }

    const id = match.params.id ;
    useEffect(()=>{
        const User = async (id) => { 
            try {
                const {data} = await getOneUser(id) ;
                setForm(data) ;
            } catch (error) {
                console.log(error) ;
            }
        }
        User(id) ;
    },[])

    const EditContactHandler = async (e)=>{
        e.preventDefault() ;
        if(!form.Name || !form.Email ){
            alert("مقادیر را وارد کنید") ;
            return ;
        }
        try {
            await editUser(form) ; 
            setForm({
                Name : '' ,
                Email : '' ,
                id : null 
            })
            history.push("/") ;
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <section className="add-contact">
            <div className="add-header">
                <h2>Edit Contact</h2>
                <Link to="/" className="list">
                    Contact List
                </Link>
            </div>
            
            <form onSubmit={EditContactHandler}>
                <div className="form-control">
                    <label htmlFor="name">Name : </label>
                    <input type="text" id="name" name="Name" value={form.Name} onChange={changeHandler} />
                </div>
                <div className="form-control">
                    <label htmlFor="email">Email : </label>
                    <input type="text" id="email" name="Email" value={form.Email} onChange={changeHandler} />
                </div>
                <button className="btn btn-add" type="submit">Edit Contact</button>
            </form>
        </section>
    );
}
 
export default EditContact;