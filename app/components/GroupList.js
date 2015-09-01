const { ListGroup, ListGroupItem  } = ReactBootstrap;

export default class GroupList extends React.Component {
    constructor(props) {
        super(props);
        this.setGroup = this.setGroup.bind(this);
    }

    setGroup() {
        console.log('showSubgroups');
        console.log('setGroupScenario');
    }

    render() {
        return (
          <div>
            <ListGroup>
                <ListGroupItem onClick={this.setGroup}>
                   Milan AC
                </ListGroupItem>
                <ListGroupItem onClick={this.setGroup}>
                  Como Calcio
                </ListGroupItem>
            </ListGroup>
          </div>
        );
    }
}
