import RoleAvailability from './RoleAvailability';
import RoleDescription from './RoleDescription';
import PrimaryRolePersonList from './PrimaryRolePersonList';
import AddUser from './AddUser';

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

    getPrimaryRoles = () => {
        console.log('Managin Primary Roles');
        console.log(this.props.appState);
        switch (true) {
        // Selezionato Gruppo
        // case ((this.props.appState.selectedGroup) && (!this.props.appState.selectedSubgroup)):
        case (this.props.appState.selectedGroup !== false) && (this.props.appState.selectedSubgroup === false):
            console.log('*** GRUPPO ***');
            break;
        // Selezionato Subgruppo
        case (this.props.appState.selectedGroup !== false) && (this.props.appState.selectedSubgroup !== false):
            console.log('*** SUB GRUPPO ***');
            break;
        // Nulla è stato selezionato
        default:

            console.log('** NULLA ***');
        }
    }

    render() {
        let getPrimaryRoles = this.getPrimaryRoles();

        const {style} = this.props;
        return (
            <div style={style}>
                  {getPrimaryRoles}
                  <RoleAvailability roleData={{
                      name: 'Scout',
                      availability: '3/4 avaiable'
                  }} />
                  <RoleDescription description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in tempus ut, vehicula eu diam. '} />
                  <AddUser>Add User</AddUser>
                  <PrimaryRolePersonList personList={['Tizio', 'Caio', 'Sempronio']} />
            </div>
        );
    }
}
