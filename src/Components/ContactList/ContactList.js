import "./ContactList.css" ;
import Contact from "./Contact/Contact";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { deleteUser, getAllUsers } from "../../Services/actionData";

const ContactList = () => {

    const [search , setSearch] = useState("")
    const [contact , setContact] = useState(null) ;
    const [users , setUsers] = useState(null) ;
    

    const searchHandler = (e) =>{
        setSearch(e.target.value) ;
        if(e.target.value !== "") {
            const filtered = users.filter(c => c.Name.toLowerCase().includes(e.target.value.toLowerCase())) ;
            setContact(filtered) ;
        }else{
            setContact(users) ;
        }
    }

    const getData = async () =>{
        try {
            const {data} = await getAllUsers() ;
            setContact(data) ;
            setUsers(data) ;
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getData() ;
    },[]);

    const removeHandler = async (id) =>{
        try {
            await deleteUser(id) ;
            const {data} = await getAllUsers() ;
            setContact(data) ;
        } catch (error) {
            console.log(error) ;
        }
    }

    return (
        <section className="contact-list">
            <div className="list-header">
                <h2>Contacts</h2>
                <input type="text" value={search} onChange={searchHandler} />
                <Link to="/Add" className="add">
                    Add
                </Link> 
            </div>
            {contact ? contact.map(c => (
                <Contact key={c.id} contact={c} onDelete={()=>removeHandler(c.id)} />
            )) : <p>loading...</p>}
        </section>
    );
}
 
export default ContactList;