
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import './App.css';
import AddContact from './Components/AddContact/AddContact';
import ContactDetail from './Components/ContactDetail/ContactDetail';
import ContactList from './Components/ContactList/ContactList';
import EditContact from './Components/EditContact/EditContact';

function App() {
    return (
        <div className="App">
            <h1>Contact-List</h1>
            <Switch>
                <Route path="/Edit/:id" component={EditContact} />
                <Route path="/User/:id" component={ContactDetail} />
                <Route path="/Add" component={AddContact} />
                <Route exact path="/" component={ContactList} />
            </Switch>
        </div>
    );
}

export default App;
