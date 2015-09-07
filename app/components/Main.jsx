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
        this.getGroupsBySubscriptionId();
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

    updateState(updateParam) {
        console.log(updateParam);
    }

    render() {
        return (
          <div>
            <BoxSideBar updateState={this.updateState} appState={this.state} />
            <BoxManaging updateState={this.updateState} appState={this.state}  />
          </div>
        );
    }
}
