import RoleAvailability from './RoleAvailability';
import RoleDescription from './RoleDescription';
import PrimaryRolePersonList from './PrimaryRolePersonList';

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
                  <RoleDescription description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in tempus ut, vehicula eu diam. '} />
                  <PrimaryRolePersonList personList={['Tizio']} />
            </div>
        );
    }
}
