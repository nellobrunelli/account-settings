export default class Managing extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div>
            <div>{this.props.name}</div>
          </div>
        );
    }
}

Managing.propTypes = {
    name: React.PropTypes.string.isRequired
};
