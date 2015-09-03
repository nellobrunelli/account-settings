
export default class RoleDescription extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div>
            {this.props.description}
          </div>
        );
    }
}

RoleDescription.propTypes = {
    description: React.PropTypes.string.isRequired
};
