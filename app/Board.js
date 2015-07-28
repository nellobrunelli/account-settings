
const { Input, Button } = ReactBootstrap;

export default class Board extends React.Component {

    componentWillMount() {
        // build the urlssss
    }

    render() {
        return (
            <div className="container">
                <Button>Testo</Button><Input type="text" />
            </div>
        );
    }
}
