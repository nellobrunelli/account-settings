export default class Managing extends React.Component {
    constructor(props) {
        super(props);
    }

    getManagedThings = ()  => {
        console.log(this.props);
    }

    render() {
        return (
          <div style={{fontSize: 22, marginBottom: '10px'}}>
            <div>{this.props.name}</div>
          </div>
        );
    }
}

Managing.propTypes = {
    name: React.PropTypes.string.isRequired
};
