export default class Managing extends React.Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        managedTitle: React.PropTypes.string.isRequired
    }

    render() {
        return (
          <div style={{
              fontSize: 22,
              marginBottom: '10px'
          }}>
                <div>{this.props.managedTitle}</div>
          </div>
        );
    }
}
