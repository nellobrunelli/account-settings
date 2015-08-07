const { ButtonGroup, DropdownButton, MenuItem } = ReactBootstrap;

export default class Board1 extends React.Component {
    render() {
        return (
            <div>
            <ButtonGroup vertical>
               <DropdownButton title="Dropdown">
                {this.props.groups.map((el, id) => {
                    return <MenuItem eventKey={id}>{el}</MenuItem>;
                })}
               </DropdownButton>
            </ButtonGroup>
            </div>
        );
    }
}

Board1.propTypes = {
    persons: React.PropTypes.array.isRequired,
    roles: React.PropTypes.array.isRequired,
    personsRoles: React.PropTypes.array.isRequired,
    groups: React.PropTypes.array.isRequired,
    loggedUser: React.PropTypes.array.isRequired
};
