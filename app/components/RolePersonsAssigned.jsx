const { Button } = ReactBootstrap;

export default class RolePersonsAssigned extends React.Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        usersAssigned: React.PropTypes.object.isRequired
    }

    // componentWillMount = () => {
    //     console.log('-+-+-+-+-+-');
    //     console.log(this.props.usersAssigned);
    // }

    handleClick = (roleId, userId) => {
        console.log('Remove Role User');
        console.log(roleId);
        console.log(userId);
    }

    getPersons = () => {
        let usersAssigned = this.props.usersAssigned;
        return (
            <div>
                {
                    Object.keys(usersAssigned).map((userId) => {
                        let user = usersAssigned[userId];
                        return (
                            <div>
                                    <span>{user.description}</span>
                                    <Button
                                        onClick={this.handleClick.bind(this, user.roleId, user.userId)}
                                        role={user.roleId}
                                        userId={userId}
                                    >
                                        Remove
                                    </Button>
                            </div>
                        );
                    })
                }
            </div>
        );
    }

    render() {
        let getPersons = this.getPersons();
        return (
          <div>
             {getPersons}
          </div>
        );
    }
}
