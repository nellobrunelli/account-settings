const { PanelGroup, Panel, ButtonGroup, Button } = ReactBootstrap;

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
            return (
                <PanelGroup onSelect={this.handleSelect} accordion>
                    {
                        this.props.appState.groups[0].elements.map((el, key) => {
                            return (
                                <Panel header={el.meta.name} onClick={this.setGroup} style={{width: '200px'}} eventKey={key}>
                                    <ButtonGroup vertical>
                                        <Button>Prima Squadra</Button>
                                        <Button>Academy</Button>
                                        <Button>Primavera</Button>
                                    </ButtonGroup>
                                </Panel>
                            );
                        })
                    }
                </PanelGroup>
            );
        }
    }

    handleSelect(ccc) {
        console.log(ccc);
        console.log(this.accordion);
    }

    miao() {
        alert('miao');
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
