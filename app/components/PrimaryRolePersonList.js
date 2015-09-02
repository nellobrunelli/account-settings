import RolePerson from './RolePerson';
import AddUser from './AddUser';

export default class PrimaryRolePersonList extends React.Component {
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

PrimaryRolePersonList.propTypes = {
    personList: React.PropTypes.array.isRequired
};
