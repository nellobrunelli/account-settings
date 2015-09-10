import ContainerPrimaryRole from './ContainerPrimaryRole';
import ContainerSecondaryRole from './ContainerSecondaryRole';
const { Tabs, Tab } = ReactBootstrap;
const ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

export default class ManagingRoles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            key: 1
        };

        this.handleSelect = this.handleSelect.bind(this);
    }

    static propTypes = {
        appState: React.PropTypes.object.isRequired,
        updateState: React.PropTypes.func.isRequired
    }

    handleSelect(key) {
        this.setState({key});
        console.log('selected tab ' + key);
    }

    getTabs = () => {
        if (this.props.appState.selectedGroup) {
            return (
              <Tabs activeKey={this.state.key} onSelect={this.handleSelect}>
                <Tab eventKey={1} title="Users & Primary Roles">
                  <ContainerPrimaryRole style={{
                      backgroundColor: '#E8E8E8',
                      marginTop: '10px'
                  }} />
                </Tab>
                <Tab eventKey={2} title="Secondary Roles">
                    <ContainerSecondaryRole style={{
                        backgroundColor: '#E8E8E8',
                        marginTop: '10px'
                    }} />
                </Tab>
              </Tabs>
            );
        }
    }

    render() {
        let getTabs = this.getTabs();
        return (
            <ReactCSSTransitionGroup transitionName="managing" transitionAppear={true} transitionEnter={true}>
                <div>
                    {getTabs}
                </div>
            </ReactCSSTransitionGroup>
        );
    }
}
