export default class Managing extends React.Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        appState: React.PropTypes.object,
        updateState: React.PropTypes.function
    }

    getManagedThings = () => {
        let title = '';

        if (this.props.appState.selectedGroup) {
            title = title.concat(this.props.appState.selectedGroup);
        }

        if (this.props.appState.selectedSubgroup) {
            title = title.concat(' - ');
            title = title.concat(this.props.appState.selectedSubgroup);
        }

        return (<span>{title}</span>);
    }

    render() {
        let getManagedThings = this.getManagedThings();
        return (
          <div style={{fontSize: 22, marginBottom: '10px'}}>
            <div>{getManagedThings}</div>
          </div>
        );
    }
}
