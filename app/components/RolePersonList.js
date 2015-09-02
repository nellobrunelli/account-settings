import RolePerson from './RolePerson';
import AddUser from './AddUser';

export default class RolePersonList extends React.Component {
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

RolePersonList.propTypes = {
    personList: React.PropTypes.array.isRequired
};
