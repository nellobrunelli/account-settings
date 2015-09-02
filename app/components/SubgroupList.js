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
          <div style={{width: '200px', marginLeft: '20px'}}>
            Subgroups
            <ListGroup>
                <ListGroupItem onClick={this.setSubgroups} style={{backgroundColor: '#D0D0D0'}} >
                  Milan Prima Squadra
                </ListGroupItem>
                <ListGroupItem onClick={this.setSubgroups} >
                  Milan Primavera
                </ListGroupItem>
                <ListGroupItem onClick={this.setSubgroups} >
                  Milan Pulcini
                </ListGroupItem>
            </ListGroup>
          </div>
        );
    }
}
