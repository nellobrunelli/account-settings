import axios from 'axios';
import Board1 from './Board1';

export default class Main extends React.Component {
    constructor() {
        super();

        this.addPerson = this.addPerson.bind(this);

        this.state = {
            persons: [],
            roles: [],
            personsRoles: [],
            errors: []
        };
    }

    componentWillMount() {
        this.getPersons();
        this.getRoles();
        this.getPersonsRoles();
    }

    addPerson(person) {
        let persons = this.state.persons;

        persons.push(person);

        this.setState({ persons });
    }

    getPersons() {
        axios.get('http://localhost:3000/persons')
        .then(response => {
            this.setState({
                persons: response.data
            });
        })
        .catch(response => {
            this.setState({
                errors: response.data
            });
        });
    }

    getRoles() {
        axios.get('http://localhost:3000/roles')
        .then(response => {
            this.setState({
                roles: response.data
            });
        })
        .catch(response => {
            this.setState({
                errors: response.data
            });
        });
    }

    getPersonsRoles() {
        axios.get('http://localhost:3000/personsRoles')
        .then(response => {
            this.setState({
              personsRoles: response.data
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
