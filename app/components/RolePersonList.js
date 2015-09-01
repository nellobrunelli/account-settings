import RolePerson from './RolePerson';

export default class RolePersonList extends React.Component {
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

RolePersonList.propTypes = {
    personList: React.PropTypes.array.isRequired
};
