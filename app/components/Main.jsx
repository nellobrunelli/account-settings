import axios from 'axios';
import BoxSideBar from './BoxSideBar';
import BoxManaging from './BoxManaging';

export default class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            subscription: {
                groups: {}
            }
        };

        this.store = {
            groups: {},
            subgroups: {}
        };
    }

    componentWillMount() {
        this.getData();
    }

    getData = () => {
        axios.all([
            axios.get('http://wyrest/v1/cerebrum/groups/groupsbysubscriptionid?subscriptionId=123&access_token=frenk'),
            axios.get('http://wyrest/v1/cerebrum/groups/subscriptiongroups?subscriptionId=123&access_token=frenk'),
            axios.get('http://wyrest/v1/cerebrum/groups/subscriptionsubgroups?subscriptionId=123&access_token=frenk')
        ]).then(axios.spread((subscription, groupsList, subgroupsList) => {
            // update Store
            this.updateStore('groups', groupsList);
            this.updateStore('subgroups', subgroupsList);

            this.updateState('subscription', subscription);
        })).catch(error => console.log(error));
    }

    /**
    * Update state
    */
    updateState = (key, val) => {
        console.log('Main -> updateSTATE');
        switch (key) {
        case 'subscription':
            // console.log('Update STATE subscription');
            // console.log(val.data.subscription);
            this.setState({
                subscription: val.data.subscription
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
            // console.log('subgroups');
            // console.log(key);
            // console.log(val);
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
                updateState={this.updateState}
                appStore={this.store}
                updateStore={this.updateStore}
                getStore={this.getStore}
            />
            <BoxManaging
                appState={this.state}
                updateState={this.updateState}
                appStore={this.store}
                updateStore={this.updateStore}
            />
          </div>
        );
    }
}
