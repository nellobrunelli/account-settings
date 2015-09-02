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
            Subgroups
            <ListGroup>
                <ListGroupItem onClick={this.setSubgroups} style={{width: '200px'}}>
                  Milan Primavera
                </ListGroupItem>
                <ListGroupItem onClick={this.setSubgroups} style={{width: '200px'}}>
                  Pulcini
                </ListGroupItem>
            </ListGroup>
          </div>
        );
    }
}
