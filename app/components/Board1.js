const { ButtonGroup, DropdownButton, MenuItem } = ReactBootstrap;

export default class Board1 extends React.Component {

    onSelected(select) {
        console.log(select);
    }

    render() {
        return (
            <div> Select Group or Subgroup
            <ButtonGroup vertical>
               <DropdownButton title="Seleziona Gruppo" onSelect={ this.onSelected } >
                {this.props.groups.map((el, id) => {
                    return <MenuItem href="#" eventKey={id}>{el}</MenuItem>;
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
