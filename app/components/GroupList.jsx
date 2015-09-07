const { ListGroup, ListGroupItem  } = ReactBootstrap;

export default class GroupList extends React.Component {
    constructor(props) {
        super(props);
        this.setGroup = this.setGroup.bind(this);
    }

    static propTypes = {
        appState: React.PropTypes.object
    }

    setGroup() {
        console.log('showSubgroups');
        console.log('setGroupScenario');
    }

    getGroupList = () => {
        if (this.props.appState.groups.length > 0) {
            console.log(this.props.appState.groups[0].elements);
            return this.props.appState.groups[0].elements;
        }

        return [];
    }

    render() {
        const getGroupList = this.getGroupList();
        return (
          <div>
              <ListGroup>
                  {
                      getGroupList.map((el) => {
                          return <ListGroupItem onClick={this.setGroup} style={{width: '200px'}}>{el.meta.name}</ListGroupItem>;
                      })
                  }
              </ListGroup>
          </div>
        );
    }
}
