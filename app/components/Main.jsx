import axios from 'axios';
import BoxSideBar from './BoxSideBar';
import BoxManaging from './BoxManaging';

export default class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dataLoaded: false,
            selectedGroup: false,
            selectedSubgroup: false,
            subscription: {
                groups: {}
            }
        };

        this.store = {
            groups: {},
            subgroups: {},
            roles: {},
            users: {}
        };
    }

    componentWillMount() {
        this.getData('load', '');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate');
        console.log(this.state);
        console.log(nextState);

        let update = false;

        switch (true) {
        // load della App
        case (this.state.dataLoaded !== nextState.dataLoaded):
            update = true;
            break;
        // click sul Gruppo
        case (this.state.selectedGroup !== nextState.selectedGroup):
            update = true;
            break;
        // click sul Subgruppo
        case (this.state.selectedSubgroup !== nextState.selectedSubgroup):
            update = true;
            break;
        default:
            update = false;
        }

        if (!update) {
            console.log('Non te la faccio la Update');
        }

        return update;
    }

    getData = (key, val) => {
        switch (key) {
        // ->>> LOAD DELLA APP
        // case ((this.state.selectedGroup === false)):
        case ('load'):
            axios.all([
                axios.get('http://wyrest/v1/cerebrum/groups/groupsbysubscriptionid?subscriptionId=1&access_token=frenk'),
                axios.get('http://wyrest/v1/cerebrum/groups/subscriptiongroups?subscriptionId=123&access_token=frenk'),
                axios.get('http://wyrest/v1/cerebrum/groups/subscriptionsubgroups?subscriptionId=123&access_token=frenk')
            ]).then(axios.spread((subscription, groupsList, subgroupsList) => {
                // update Store
                this.updateStore('groups', groupsList);
                this.updateStore('subgroups', subgroupsList);

                // update State
                this.updateState('subscription', val, subscription);
            })).catch(error => console.log(error));
            break;
        // ->>> GRUPPO SELEZIONATO
        // case ((this.state.selectedGroup) && (this.state.selectedSubgroup === false)):
        case ('group'):
            axios.all([
                axios.get('http://wyrest/v1/cerebrum/groups?subscriptionId=1&groupId=1234&access_token=frenk'),
                axios.get('http://wyrest/v1/cerebrum/groups/subscriptiongroups?subscriptionId=123&access_token=frenk'),
                axios.get('http://wyrest/v1/cerebrum/groups/subscriptionsubgroups?subscriptionId=123&access_token=frenk'),
                axios.get('http://wyrest/v1/cerebrum/groups/subscriptionroles?subscriptionId=12&access_token=frenk'),
                axios.get('http://wyrest/v1/cerebrum/groups/subscriptionusers?subscriptionId=1&access_token=frenk')
            ]).then(axios.spread((subscription, groupsList, subgroupsList, rolesList, usersList) => {
                // update Store
                this.updateStore('groups', groupsList);
                this.updateStore('subgroups', subgroupsList);
                this.updateStore('roles', rolesList);
                this.updateStore('users', usersList);

                // update State
                this.updateState('group', val, subscription);
            })).catch(error => console.log(error));
            break;
        // ->>> SUBGRUPPO SELEZIONATO
        // case ((this.state.selectedGroup) && (this.state.selectedSubgroup)):
        case ('subgroup'):
            axios.all([
                axios.get('http://wyrest/v1/cerebrum/groups/subgroup?subscriptionId=1&subgroupId=2&access_token=frenk'),
                axios.get('http://wyrest/v1/cerebrum/groups/subscriptiongroups?subscriptionId=123&access_token=frenk'),
                axios.get('http://wyrest/v1/cerebrum/groups/subscriptionsubgroups?subscriptionId=123&access_token=frenk'),
                axios.get('http://wyrest/v1/cerebrum/groups/subscriptionroles?subscriptionId=12&access_token=frenk'),
                axios.get('http://wyrest/v1/cerebrum/groups/subscriptionusers?subscriptionId=1&access_token=frenk')
            ]).then(axios.spread((subscription, groupsList, subgroupsList, rolesList, usersList) => {
                // update Store
                this.updateStore('groups', groupsList);
                this.updateStore('subgroups', subgroupsList);
                this.updateStore('roles', rolesList);
                this.updateStore('users', usersList);

                // update State
                this.updateState('subgroup', val.subgroup, subscription);
            })).catch(error => console.log(error));
            break;
        default:
            // ->>> APP IN ERRORE
            console.log('*** WRONG STATE SULLA APP ***');
            console.log(val);
            break;
        }
    }

    /**
    * Update state
    */
    updateState = (key, val, subscription) => {
        console.log('Main -> updateSTATE');
        console.log(key);
        switch (key) {
        case 'subscription':
            // console.log('Update STATE subscription');
            // console.log(val);
            this.setState({
                dataLoaded: true,
                subscription: subscription.data.subscription
            });
            break;
        case 'group':
            this.setState({
                dataLoaded: true,
                subscription: subscription.data.subscription,
                selectedGroup: val,
                selectedSubgroup: false
            });

            break;
        case 'subgroup':
            console.log('Update STATE subgroup');
            console.log(val);
            this.setState({
                dataLoaded: true,
                subscription: subscription.data.subscription,
                selectedGroup: val.group,
                selectedSubgroup: val.subgroup
            });
            break;
        default:
            console.log('WRONG PARAM ON UPDATE STATE');
            console.log(val);
        }
    }

    /**
    * Update store
    */
    updateStore = (key, val) => {
        console.log('Main -> updateSTORE');
        switch (key) {
        case 'groups':
            // console.log('subgroups');
            // console.log(key);
            // console.log(val);
            this.store.groups = val.data.groups;
            break;
        case 'subgroups':
            // console.log('subgroups');
            // console.log(key);
            // console.log(val);
            this.store.subgroups = val.data.subgroups;
            break;
        case 'roles':
            // console.log('roles');
            // console.log(key);
            // console.log(val);
            this.store.roles = val.data.roles;
            break;
        case 'users':
            // console.log('users');
            // console.log(key);
            // console.log(val);
            this.store.users = val.data.users;
            break;
        default:
            console.log('WRONG PARAM ON UPDATE STORE');
        }
    }

    /**
    * Update store
    */
    getStore = (key, val) => {
        console.log('Main -> getSTORE');
        switch (key) {
        case 'group':
            // console.log('groups');
            // console.log(key);
            // console.log(val);
            // console.log(this.store.groups);
            return this.store.groups[val];
        case 'subgroup':
            // console.log('----------------------');
            // console.log('subgroups');
            // console.log(this.store.subgroups[val]);
            // console.log(key);
            // console.log(val);
            // console.log('----------------------');
            return this.store.subgroups[val];
        default:
            console.log('WRONG PARAM ON GET STORE');
        }
    }

    render() {
        return (
          <div>
            <BoxSideBar
                appState={this.state}
                appStore={this.store}
                getData={this.getData}
                updateStore={this.updateStore}
                getStore={this.getStore}
            />
            <BoxManaging
                appState={this.state}
                appStore={this.store}
                getData={this.getData}
                updateStore={this.updateStore}
                getStore={this.getStore}
            />
          </div>
        );
    }
}
