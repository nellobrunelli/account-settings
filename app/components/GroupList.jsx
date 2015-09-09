const { PanelGroup, Panel, ButtonGroup, Button } = ReactBootstrap;
import ElasticForm from 'elastic-form';
console.log(ElasticForm, 'elastic');

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
            const Panels = this.props.appState.groups[0].elements.map((el, key) => {
                return (
                    <Panel header={el.meta.name} onClick={this.setGroup} style={{width: '200px'}} eventKey={key}>
                        <ButtonGroup vertical>
                            {
                                el.subgroups.map((subgroup, i) => {
                                    return <Button key={i}>{subgroup[Object.keys(subgroup)[0]]}</Button>;
                                })
                            }
                        </ButtonGroup>
                    </Panel>
                );
            });

            return (
                <PanelGroup onSelect={this.handleSelect} accordion>
                    {Panels}
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
