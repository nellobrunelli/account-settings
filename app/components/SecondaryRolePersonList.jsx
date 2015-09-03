import RolePerson from './RolePerson';
import AddUser from './AddUser';

export default class SecondaryRolePersonList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div>
            <AddUser>Add User</AddUser>
            {this.props.personList.map((personName) => {
                return <RolePerson personName={personName} />;
            })}
          </div>
        );
    }
}

SecondaryRolePersonList.propTypes = {
    personList: React.PropTypes.array.isRequired
};
