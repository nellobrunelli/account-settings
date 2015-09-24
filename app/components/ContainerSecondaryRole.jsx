import RoleAvailability from './RoleAvailability';
import RoleDescription from './RoleDescription';
// import PrimaryRolePersonList from './PrimaryRolePersonList';

export default class ContainerPrimaryRole extends React.Component {

    constructor(props) {
        super(props);
    }

    static propTypes = {
        style: React.PropTypes.object,
        appState: React.PropTypes.object.isRequired,
        getData: React.PropTypes.func.isRequired,
        appStore: React.PropTypes.object.isRequired,
        updateStore: React.PropTypes.func.isRequired,
        getStore: React.PropTypes.func.isRequired
    }

    render() {
        const {style} = this.props;
        return (
            <div style={style}>
                  <RoleAvailability roleData={{
                      name: 'Academy Supervisor',
                      availability: '0/1 avaiable'
                  }} />
              <RoleDescription description={'Chiamato dal secondary Role'} />
              {/* <PrimaryRolePersonList personList={['Tizio']} /> */}
            </div>
        );
    }
}
