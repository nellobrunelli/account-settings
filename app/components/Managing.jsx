export default class Managing extends React.Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        appState: React.PropTypes.object.isRequired,
        getData: React.PropTypes.func.isRequired,
        appStore: React.PropTypes.object.isRequired,
        updateStore: React.PropTypes.func.isRequired,
        getStore: React.PropTypes.func.isRequired
    }

    getManagedThings = () => {
        let title = '';

        if (this.props.appState.selectedGroup) {
            title = title.concat(this.props.getStore('group', this.props.appState.selectedGroup));
        }

        if (this.props.appState.selectedSubgroup) {
            title = title.concat(' - ');
            title = title.concat(this.props.getStore('subgroup', this.props.appState.selectedSubgroup));
        }

        return (<span>{title}</span>);
    }

    render() {
        let getManagedThings = this.getManagedThings();
        return (
          <div style={{
              fontSize: 22,
              marginBottom: '10px'
          }}>
                <div>{getManagedThings}</div>
          </div>
        );
    }
}
