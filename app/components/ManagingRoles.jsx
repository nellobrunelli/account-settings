import ContainerPrimaryRole from './ContainerPrimaryRole';
import ContainerSecondaryRole from './ContainerSecondaryRole';
// import appStore from '../stores/appStore';
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

    // componentDidUpdate() {
    //     let subscription = this.props.subscription;
    //     let selectedGroup = subscription.selectedGroup;
    //     let groupData = {};
    //
    //     if (selectedGroup !== false) {
    //         console.log('GRUPPO O SUBGRUPPO SELEZIONATO: preparo dati per Primary e Secondary Roles');
    //         let group = subscription.subscription.groups[selectedGroup];
    //         let storeGroups = appStore.getGroups();
    //         let storeRoles = appStore.getRoles();
    //         let storeUsers = appStore.getUsers();
    //
    //         groupData = {
    //             group: group,
    //             storeGroups: storeGroups,
    //             storeRoles: storeRoles,
    //             storeUsers: storeUsers
    //         };
    //         console.log(groupData);
    //     } else {
    //         console.log('nessuna selezione');
    //     }
    //     return groupData;
    // }

    handleSelect(key) {
        this.setState({key});
        console.log('selected tab ' + key);
    }


    getRoles = () => {
        let subscription = this.props.subscription;
        let selectedGroup = subscription.selectedGroup;
        let selectedSubgroup = subscription.selectedSubgroup;
        let groupData = {};

        if ((selectedGroup !== false) || (selectedSubgroup !== false)) {
            // Gruppo o Subgruppo selezionato
            // console.log('GRUPPO O SUBGRUPPO SELEZIONATO: preparo dati per Primary e Secondary Roles');
            // let storeGroups = appStore.getGroups();
            // let storeRoles = appStore.getRoles();
            // let storeUsers = appStore.getUsers();

            groupData = {
                subscription: subscription
                // storeGroups: storeGroups,
                // storeRoles: storeRoles,
                // storeUsers: storeUsers
            };
        }

        // console.log('*** Managing Roles ***');
        // console.log(subscription);

        return groupData;
    }

    getTabs = () => {
        let getRoles = this.getRoles();
        return (
            <Tabs activeKey={this.state.key} onSelect={this.handleSelect}>
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
