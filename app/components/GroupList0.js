const { ListGroup, ListGroupItem  } = ReactBootstrap;

export default class GroupList extends React.Component {
    constructor(props) {
        super(props);
        this.getSubgroups = this.getSubgroups.bind(this);
    }

    getSubgroups() {
        console.log('getSubgroups');
    }

    render() {
        return (
          <div>
            <ListGroup>
                <ListGroupItem href="#link1">Milan AC</ListGroupItem>
                <ListGroupItem onClick={this.getSubgroups}>
                  Como Calcio
                </ListGroupItem>
            </ListGroup>
          </div>
        );
    }
}
