export default class RoleAvailability extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div  style={{fontSize: 18}}>
            <div>{this.props.roleData.name} {this.props.roleData.availability}</div>
          </div>
        );
    }
}

RoleAvailability.propTypes = {
    roleData: React.PropTypes.object.isRequired
};
