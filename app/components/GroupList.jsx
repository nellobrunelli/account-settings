const { PanelGroup, Panel, ButtonGroup, Button, MenuItem } = ReactBootstrap;

export default class GroupList extends React.Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        appState: React.PropTypes.object.isRequired,
        updateState: React.PropTypes.func.isRequired,
        appStore: React.PropTypes.object.isRequired,
        updateStore: React.PropTypes.func.isRequired,
        getStore: React.PropTypes.func.isRequired
    }

    /**
    * Lista dei gruppi e subgruppi
    */
    getGroupsSubgroupsList = () => {
        let groups = this.props.appState.subscription.groups;
        let groupsIds = Object.keys(groups);

        let Panels = groupsIds.map((id, key) => {
            return (
                <Panel
                    header={this.props.getStore('group', id)}
                    style={{width: '300px'}}
                    key={key}
                    eventKey={id}>
                    <ButtonGroup vertical>
                        {
                            groups[id].subgroups.map((subgroupId, i) => {
                                return (
                                    <MenuItem
                                        key={i}
                                        group={id}
                                        subgroup={subgroupId}
                                        onSelect={this.handleSubgroupSelect.bind(this, id, subgroupId)}>
                                        <Button>{this.props.getStore('subgroup', subgroupId)}</Button>
                                    </MenuItem>
                                );
                            })
                        }
                    </ButtonGroup>
                </Panel>
            );
        });

        return (
            <PanelGroup onSelect={this.handleGroupSelect} accordion>
                {Panels}
            </PanelGroup>
        );
    }

    handleGroupSelect = (key) => {
        // arriva da componente Panel-> onSelect ... viene passato ciò che è nell'attributo key
        console.log(key);
        console.log(this.props);
        this.props.updateState({
            selectedGroup: key,
            selectedSubgroup: false
        });
    }

    handleSubgroupSelect = (group, subgroup) => {
        console.log(group);
        console.log(subgroup);
        this.props.updateState({
            selectedGroup: group,
            selectedSubgroup: subgroup
        });
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
