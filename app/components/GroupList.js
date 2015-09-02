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
            Groups
            <ListGroup>
                <ListGroupItem onClick={this.setGroup} style={{width: '200px', backgroundColor: '#D0D0D0'}}>
                   Milan AC
                </ListGroupItem>
                <ListGroupItem onClick={this.setGroup} style={{width: '200px'}}>
                  Como Calcio
                </ListGroupItem>
            </ListGroup>
          </div>
        );
    }
}
