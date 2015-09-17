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
            subgroups: {}
        };
    }

    componentWillMount() {
        this.getData();
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate');
        let update = true;
        console.log(this.state);
        console.log(nextState);
        switch (true) {
        case (this.state.selectedGroup !== nextState.selectedGroup):
            update = true;
            break;
        case (this.state.dataLoaded !== nextState.dataLoaded):
            update = true;
            break;
        default:
            update = false;
        }

        return update;
    }

    getData = () => {
        switch (true) {
        // ->>> LOAD DELLA APP
        case ((this.state.selectedGroup === false)):
            axios.all([
                axios.get('http://wyrest/v1/cerebrum/groups/groupsbysubscriptionid?subscriptionId=123&access_token=frenk'),
                axios.get('http://wyrest/v1/cerebrum/groups/subscriptiongroups?subscriptionId=123&access_token=frenk'),
                axios.get('http://wyrest/v1/cerebrum/groups/subscriptionsubgroups?subscriptionId=123&access_token=frenk')
            ]).then(axios.spread((subscription, groupsList, subgroupsList) => {
                // update Store
                this.updateStore('groups', groupsList);
                this.updateStore('subgroups', subgroupsList);

                // update State
                this.updateState('subscription', subscription);
            })).catch(error => console.log(error));
            break;
        // ->>> GRUPPO SELEZIONATO
        case ((this.state.selectedGroup) && (this.state.selectedSubgroup === false)):
            console.log('IMPLEMENTARE AJAX CALL PER CASE GRUPPO SELEZIONATO');
            break;
        // ->>> SUBGRUPPO SELEZIONATO
        case ((this.state.selectedGroup) && (this.state.selectedSubgroup)):
            console.log('IMPLEMENTARE AJAX CALL PER CASE SUBGRUPPO SELEZIONATO');
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
    updateState = (key, val) => {
        console.log('Main -> updateSTATE');
        console.log(key);
        switch (key) {
        case 'subscription':
            // console.log('Update STATE subscription');
            // console.log(val);
            this.setState({
                dataLoaded: true,
                subscription: val.data.subscription
            });
            break;
        case 'group':
            console.log('Update STATE subscription');
            console.log(val);
            this.setState({
                dataLoaded: true,
                selectedGroup: val
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
