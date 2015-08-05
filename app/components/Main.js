import axios from 'axios';
import Board1 from './Board1';
import ItemTypes from './ItemTypes';

export default class Main extends React.Component {
    constructor() {
        super();

        this.addPerson = this.addPerson.bind(this);

        this.state = {
          roles: [],
          persons: [],
          droppedBoxNames: []
        };
    }

    componentWillMount() {
        this.getPersons();
        this.getRoles();
    }

    addPerson(person) {
        let persons = this.state.persons;
        persons.push(person);

        this.setState({ persons });
    }

    /*
     * get all Subscription Persons
     */
    getPersons() {
        axios.get('http://localhost:3000/persons')
        .then(response => {
            let personList = [];
            response.data.map(function parsingPerson(person) {
                personList.push({ name: person.name, type: ItemTypes.ROLE });
            });

            this.setState({
                persons: personList
            });
        })
        .catch(response => {
            this.setState({
                errors: response.data
            });
        });
    }

   /*
    * get all Subscription Roles
    */
    getRoles() {
        axios.get('http://localhost:3000/roles')
        .then(response => {
            let rolesList = [];
            response.data.map(function parsingPerson(role) {
                rolesList.push({ accepts: [ItemTypes.ROLE], lastDroppedItem: null, role: role });
            });

            this.setState({
                roles: rolesList
            });
        })
        .catch(response => {
            this.setState({
                errors: response.data
            });
        });
    }

    render() {
        return (
            <div id="main">
                <Board1 persons={this.state.persons} roles={this.state.roles} personsRoles={this.state.personsRoles} />
            </div>
        );
    }
}
