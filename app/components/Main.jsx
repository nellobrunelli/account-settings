import axios from 'axios';
import BoxSideBar from './BoxSideBar';
import BoxManaging from './BoxManaging';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            groups: [],
            selectedGroup: false,
            subgroups: [],
            selectedSubgroup: false
        };
    }

    componentWillMount() {
        this.getData();
    }

    getData() {
        axios.all([
            axios.get('http://localhost:3000/groups'),
            axios.get('http://localhost:3000/roles')
        ]).then(axios.spread((groups, roles) => {
            this.setState({
                groups: groups.data,
                roles: roles.data
            });
        }));
    }

    updateState = (updateParam) => {
        console.log('Main -> updateState');
        console.log(updateParam);
        this.setState(updateParam);
    }

    render() {
        return (
          <div>
            <BoxSideBar updateState={this.updateState} appState={this.state} />
            <BoxManaging updateState={this.updateState} appState={this.state} />
          </div>
        );
    }
}
