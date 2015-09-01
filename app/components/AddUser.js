const { Button } = ReactBootstrap;

export default class AddUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            roleId: this.props.roleId
        };
    }

    addUser() {
        console.log('Add user');
    }

    render() {
        return (
          <div>
                <Button onClick={this.addUser}>Add User</Button>
          </div>
        );
    }
}

AddUser.propTypes = {
    roleId: React.PropTypes.object.isRequired
};
