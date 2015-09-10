import RolePerson from './RolePerson';

export default class PrimaryRolePersonList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div>
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
