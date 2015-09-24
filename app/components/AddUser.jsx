const { Button } = ReactBootstrap;

export default class AddUser extends React.Component {
    constructor(props) {
        super(props);
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
