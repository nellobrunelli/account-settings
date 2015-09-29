const { Button } = ReactBootstrap;

export default class ContainerUsers extends React.Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        style: React.PropTypes.object,
        subscription: React.PropTypes.object.isRequired
    }

    handleClick = (user) => {
        console.log(user);
    }

    exposeUsers = () => {
        let users = [
            {utente: 'Franco Traversaro'},
            {utente: 'Franco Puppo'},
            {utente: 'Giuseppe Garibaldi'}
        ];
        return users.map((el) => {
            return (
                <div>
                    <Button>{el.utente}</Button>
                    <Button
                        onClick={this.handleClick.bind(this, el.utente)}
                        user={el.utente}
                        >
                        Remove
                    </Button>
                </div>
            );
        });
    }

    render() {
        let exposeUsers = this.exposeUsers();
        return (
            <div>
                <hr style={{borderColor: '#337ab7'}}></hr>
                {exposeUsers}
            </div>
        );
    }
}
