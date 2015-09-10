import Managing from './Managing';
import ManagingRoles from './ManagingRoles';

export default class BoxManaging extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            key: 1
        };

        this.handleSelect = this.handleSelect.bind(this);
    }

    static propTypes = {
        appState: React.PropTypes.object.isRequired,
        updateState: React.PropTypes.func.isRequired
    }

    handleSelect(key) {
        this.setState({key});
        console.log('selected tab ' + key);
    }

    render() {
        return (
          <div style={{
              backgroundColor: '#E0E0E0',
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 0,
              left: '400px',
              padding: '1%'
          }}>
              <Managing updateState={this.props.updateState} appState={this.props.appState} />
              <ManagingRoles updateState={this.props.updateState} appState={this.props.appState} />
          </div>
        );
    }
}
