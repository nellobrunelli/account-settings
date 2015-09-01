import axios from 'axios';
import GroupSelector from './GroupSelector';
import GroupExposer from './GroupExposer';

export default class Main extends React.Component {
    constructor() {
        super();

        this.state = {
            persons: [],
            roles: [],
            personsRoles: [],
            selected: [],
            groups: []
        };
    }

    componentWillMount() {
        this.getPersons();
        this.getRoles();
        this.getPersonsRoles();
        this.getGroupsBySubscriptionId();
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

    updateState(e, s) {
        console.log('updateState', e, s);
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

    getGroupsBySubscriptionId() {
        axios.get('http://localhost:3000/groups')
        .then(response => {
            this.setState({
              groups: response.data
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
                 <GroupExposer selected={this.state.selected} />
                 <GroupSelector groups={this.state.groups} updateState={this.updateState} />
            </div>
        );
    }
}
