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
        getData: React.PropTypes.func.isRequired,
        subscription: React.PropTypes.object.isRequired
    }

    handleSelect(key) {
        console.log('selected tab ' + key);
    }

    getRoles = () => {
        let subscription = this.props.subscription;
        let selectedGroup = subscription.selectedGroup;
        let selectedSubgroup = subscription.selectedSubgroup;
        let groupData = {};

        if ((selectedGroup !== false) || (selectedSubgroup !== false)) {
            groupData = {
                subscription: subscription
            };
        }

        return groupData;
    }

    getTabs = () => {
        let getRoles = this.getRoles();
        if (Object.keys(getRoles).length > 0) {
            return (
                <Tabs bsStyle="pills">
                    <Tab eventKey={1} title="Users & Primary Roles">
                      <ContainerPrimaryRole
                          style={{
                              backgroundColor: '#E8E8E8',
                              marginTop: '10px'
                          }}
                          subscription={getRoles}
                      />
                    </Tab>
                    <Tab eventKey={2} title="Secondary Roles">
                        <ContainerSecondaryRole
                          style={{
                              backgroundColor: '#E8E8E8',
                              marginTop: '10px'
                          }}
                          subscription={getRoles}
                        />
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
