import GroupList from './GroupList';

export default class BoxSideBar extends React.Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        appState: React.PropTypes.object.isRequired,
        updateState: React.PropTypes.func.isRequired,
        appStore: React.PropTypes.object.isRequired,
        updateStore: React.PropTypes.func.isRequired
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
              <GroupList
                  appState={this.props.appState}
                  updateState={this.props.updateState}
                  appStore={this.props.appStore}
                  updateStore={this.props.updateStore}
              />
          </div>
        );
    }
}
