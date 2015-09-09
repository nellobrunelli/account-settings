const { PanelGroup, Panel, ButtonGroup, Button, MenuItem } = ReactBootstrap;

export default class GroupList extends React.Component {
    constructor(props) {
        super(props);
        // this.setGroup = this.setGroup.bind(this);
        // this.props.updateState = this.props.updateState.bind(this);
        // console.log('-----------');
        // console.log(props.updateState);
        // console.log('-----------');
    }

    static propTypes = {
        appState: React.PropTypes.object,
        updateState: React.PropTypes.function
    }

    // setGroup() {
    //     console.log('showSubgroups');
    //     console.log('setGroupScenario');
    // }

    getGroupList = () => {
        if (this.props.appState.groups.length > 0) {
            const Panels = this.props.appState.groups[0].elements.map((el, key) => {
                return (
                    <Panel header={el.meta.name} style={{width: '300px'}} key={key} eventKey={el.meta.name}>
                        <ButtonGroup vertical>
                            {
                                el.subgroups.map((subgroup, i) => {
                                    return (
                                        <MenuItem key={i} group={el.meta.name} subgroup={subgroup[Object.keys(subgroup)[0]]} onSelect={this.handleSubgroupSelect.bind(this, el.meta.name, subgroup[Object.keys(subgroup)[0]])}>
                                            <Button>{subgroup[Object.keys(subgroup)[0]]}</Button>
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
    }

    handleGroupSelect = (key) => {
        // arriva da componente Panel-> onSelect ... viene passato ciò che è nell'attributo key
        console.log(key);
        console.log(this.props);
        this.props.updateState({selectedGroup: key, selectedSubgroup: false});
    }

    handleSubgroupSelect = (group, subgroup) => {
        console.log(group);
        console.log(subgroup);
        this.props.updateState({selectedGroup: group, selectedSubgroup: subgroup});
    }

    render() {
        const getGroupList = this.getGroupList();
        return (
          <div>
              {getGroupList}
          </div>
        );
    }
}
