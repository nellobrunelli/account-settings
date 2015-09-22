const { PanelGroup, Panel, ButtonGroup, Button, MenuItem } = ReactBootstrap;

export default class GroupList extends React.Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        groups: React.PropTypes.array.isRequired,
        handleGroupSelect: React.PropTypes.func.isRequired,
        handleSubgroupSelect: React.PropTypes.func.isRequired
    }

    /**
    * Lista dei gruppi e subgruppi
    */
    getGroupsSubgroupsList = () => {
        let groups = this.props.groups;
        let Panels = groups.map((group, key) => {
            return (
                <Panel
                    header={group.name}
                    style={{width: '300px'}}
                    key={key}
                    eventKey={group.id}
                    className="group-panel">
                    <ButtonGroup vertical>
                        {
                            group.subgroups.map((subgroup, i) => {
                                return (
                                    <MenuItem
                                        key={i}
                                        group={group.id}
                                        subgroup={subgroup.id}
                                        onSelect={this.props.handleSubgroupSelect.bind(this, group.id, subgroup.id)}>
                                        <Button className="subgroup">
                                            {subgroup.name}
                                        </Button>
                                    </MenuItem>
                                );
                            })
                        }
                    </ButtonGroup>
                </Panel>
            );
        });

        return (
            <PanelGroup onSelect={this.props.handleGroupSelect} accordion>
                {Panels}
            </PanelGroup>
        );
    }

    render() {
        const getGroupsSubgroupsList = this.getGroupsSubgroupsList();
        return (
          <div>
              {getGroupsSubgroupsList}
          </div>
        );
    }
}
