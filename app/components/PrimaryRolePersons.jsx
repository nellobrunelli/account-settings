const { SplitButton, MenuItem } = ReactBootstrap;

export default class PrimaryRolePersons extends React.Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        usersAvaiable: React.PropTypes.object.isRequired
    }

    handleSelect = (personName) => {
        console.log(this);
        console.log(personName);
        console.log('handleSelect');
        return true;
    }

    getPersons = () => {
        return (
            <div>
                <SplitButton title="Select User" pullRight id="split-button-pull-right">
                {
                    Object.keys(this.props.usersAvaiable).map((userId) => {
                        return (
                            <div>
                                <MenuItem
                                    onSelect={this.handleSelect.bind(this, userId)}
                                    eventKey={userId}
                                    href="#"
                                >
                                    {this.props.usersAvaiable[userId]}
                                </MenuItem>
                            </div>
                        );
                    })
                }
                </SplitButton>
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
