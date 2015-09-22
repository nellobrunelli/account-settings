export default class Managing extends React.Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        groupName: React.PropTypes.string.isRequired,
        subGroupName: React.PropTypes.string.isRequired
    }

    getManagedThings = () => {
        let title = '';

        title = `${this.props.groupName}` + this.props.subGroupName
            ? ` - ${this.props.subGroupName}`
            : '';

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
