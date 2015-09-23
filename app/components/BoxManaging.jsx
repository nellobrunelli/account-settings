import Managing from './Managing';
import appStore from '../stores/appStore';
import ManagingRoles from './ManagingRoles';

export default class BoxManaging extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            key: 1
        };

        this.handleSelect = this.handleSelect.bind(this);
    }

    static propTypes = {
        subscription: React.PropTypes.object.isRequired,
        getData: React.PropTypes.func.isRequired,
        getStore: React.PropTypes.func.isRequired,
        groups: React.PropTypes.object.isRequired
    }

    handleSelect(key) {
        this.setState({key});
        console.log('selec ted tab ' + key);
    }

    getManagingTitle = () => {
        let title = '';
        let groupName = appStore.getStore('group', this.props.subscription.selectedGroup);
        let subgroupName = appStore.getStore('subgroup', this.props.subscription.selectedSubgroup);

        title = groupName ? `${groupName}` : '';
        title = title.concat(subgroupName ? ` - ${subgroupName.name}` : '');

        return (<span>{title}</span>);
    }

    render() {
        let getManagingTitle = this.getManagingTitle();

        return (
          <div style={{
              backgroundColor: '#E0E0E0',
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 0,
              left: '400px',
              padding: '1%'
          }}>
              <Managing
                  key={1}
                  managedTitle={getManagingTitle}
              />
              <ManagingRoles
                  key={2}
                  getData={this.props.getData}
                  subscription={this.props.subscription}
              />
          </div>
        );
    }
}
