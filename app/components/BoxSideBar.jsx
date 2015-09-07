import GroupList from './GroupList';
import SubgroupList from './SubgroupList';

export default class BoxSideBar extends React.Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        appState: React.PropTypes.object,
        updateState: React.PropTypes.object
    }

    render() {
        return (
          <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: 0,
              padding: '1%'
          }}>
              <GroupList updateState={this.props.updateState} appState={this.props.appState} />
              <SubgroupList updateState={this.props.updateState} appState={this.props.appState} />
          </div>
        );
    }
}
