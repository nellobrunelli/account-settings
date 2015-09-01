const { ListGroup, ListGroupItem  } = ReactBootstrap;

export default class SubgroupList extends React.Component {
    constructor(props) {
        super(props);
        this.setSubgroups = this.setSubgroups.bind(this);
    }

    setSubgroups() {
        console.log('setSubgroupScenario');
    }

    render() {
        return (
          <div>
            <ListGroup>
                <ListGroupItem onClick={this.setSubgroups}>
                  Milan Primavera
                </ListGroupItem>
                <ListGroupItem onClick={this.setSubgroups}>
                  Pulcini
                </ListGroupItem>
            </ListGroup>
          </div>
        );
    }
}
