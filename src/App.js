
import { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import './App.css';
import AddContact from './Components/AddContact/AddContact';
import ContactDetail from './Components/ContactDetail/ContactDetail';
import ContactList from './Components/ContactList/ContactList';

function App() {

    const [contact , setContact] = useState([]) ;

    useEffect(()=>{
        const contacts = localStorage.getItem("contact") && JSON.parse(localStorage.getItem("contact"));
        setContact(contacts) ; 
    },[]);

    useEffect(()=>{
        localStorage.setItem("contact" , JSON.stringify(contact)) ;
    },[contact]);

    const contactHandler = (data)=>{
        setContact([...contact ,{id:Math.floor(Math.random()*1000000000) , ...data} ]) ;
    }

    const removeHandler = (id) =>{
        const filteredItem = contact.filter(c => c.id !== id) ;
        setContact(filteredItem) ;
    }

    return (
        <div className="App">
            <h1>Contact-List</h1>
            <Switch>
                <Route path="/User/:id" component={ContactDetail} />
                <Route path="/Add" render={(props)=><AddContact contactHandler={contactHandler} {...props} />} />
                <Route exact path="/" render={(props)=><ContactList contacts={contact} onDelete={removeHandler} {...props} />} />
            </Switch>
        </div>
    );
}

export default App;
