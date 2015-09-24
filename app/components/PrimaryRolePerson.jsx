const { Button } = ReactBootstrap;

export default class PrimaryRolePerson extends React.Component {
    constructor(props) {
        super(props);

        this.handleRemove = this.handleRemove.bind(this);
    }

    static propTypes = {
        usersAvaiable: React.PropTypes.object.isRequired
    }

    componentDidUpdate  = () => {
        console.log('PrimaryRolePerson');
    }

    handleRemove = () => {
        console.log('removing');
    }

    getPersons = () => {
        let usersAvaiable = this.props.usersAvaiable;
        return (
            <div>
                {
                    Object.keys(this.props.usersAvaiable).map((userId) => {
                        return (
                            <div>
                                <span
                                    style={{
                                        margin: 10
                                    }}>
                                    {this.props.usersAvaiable[userId]}
                                </span>
                                <Button
                                    key={userId}
                                    onClick={this.handleRemove}>Remove
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
              <div style={{marginTop: 10}}>
                  {getPersons}
              </div>
        );
    }
}
