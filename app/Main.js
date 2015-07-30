import axios from 'axios';
import Board1 from './Board1';
import ButtonPerson from './ButtonPerson';

export default class Main extends React.Component {
    constructor() {
        super();

        this.addPerson = this.addPerson.bind(this);

        this.state = {
            persons: []
        };
    }

    componentWillMount() {
        this.getPersons();
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
        .catch(function() {
            console.log('--- there is an error ');
        });
    }

    render() {
        return (
            <div>
                <Board1 persons={this.state.persons}/>
                <ButtonPerson handleClick={this.addPerson} />
            </div>
        );
    }
}
