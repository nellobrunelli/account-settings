import axios from 'axios';
import BoxSideBar from './BoxSideBar';
// import BoxManaging from './BoxManaging';

import appStore from '../stores/appStore';

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
                axios.get('http://wyrest/v1/cerebrum/groups/subscriptionsubgroups?subscriptionId=123&access_token=frenk'),
                axios.get('http://wyrest/v1/cerebrum/groups/subscriptionroles?subscriptionId=12&access_token=frenk'),
                axios.get('http://wyrest/v1/cerebrum/groups/subscriptionusers?subscriptionId=1&access_token=frenk')
            ]).then(axios.spread((subscription, groupsList, subgroupsList, rolesList, usersList) => {
                // update Store
                appStore.updateStore('groups', groupsList);
                appStore.updateStore('subgroups', subgroupsList);
                appStore.updateStore('roles', rolesList);
                appStore.updateStore('users', usersList);

                // update State
                this.updateState('subscription', val, subscription);
            })).catch(error => console.log(error));
            break;
        // ->>> GRUPPO SELEZIONATO
        // case ((this.state.selectedGroup) && (this.state.selectedSubgroup === false)):
        case ('group'):
            axios.all([
                axios.get('http://wyrest/v1/cerebrum/groups?subscriptionId=1&groupId=1234&access_token=frenk')
            ]).then(axios.spread((subscription) => {
                // update State
                this.updateState('group', val, subscription);
            })).catch(error => console.log(error));
            break;
        // ->>> SUBGRUPPO SELEZIONATO
        // case ((this.state.selectedGroup) && (this.state.selectedSubgroup)):
        case ('subgroup'):
            axios.all([
                axios.get('http://wyrest/v1/cerebrum/groups/subgroup?subscriptionId=1&subgroupId=2&access_token=frenk')
            ]).then(axios.spread((subscription) => {
                // update State
                this.updateState('subgroup', val, subscription);
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
            debugger;
            this.setState({
                dataLoaded: true,
                subscription: subscription.data.subscription,
                selectedGroup: val.groupId,
                selectedSubgroup: val.subgroupId
            });
            break;
        default:
            console.log('WRONG PARAM ON UPDATE STATE');
            console.log(val);
        }
    }

    render() {
        return (
          <div>
            <BoxSideBar
                groups={this.state.subscription.groups}
                getData={this.getData}
            />
                {/* <BoxManaging
                    getData={this.getData}
                />*/}
          </div>
        );
    }
}
