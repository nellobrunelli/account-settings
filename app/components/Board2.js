const { ButtonGroup, DropdownButton, MenuItem } = ReactBootstrap;

export default class Board2 extends React.Component {

  componentWillReceiveProps(nextProps) {
      console.log(nextProps);
  }

    render() {
        return (
            <div> Select Group or Subgroup
              <ButtonGroup vertical>
                 <DropdownButton title="Seleziona Gruppo" >
                  {this.props.groups.map((el, id) => {
                      return <MenuItem href="#" eventKey={id} onSelect={ this.props.updateState.bind(this, el, id) }>{el}</MenuItem>;
                  })}
                 </DropdownButton>
              </ButtonGroup>
            </div>
        );
    }
}

Board2.propTypes = {
    updateState: React.PropTypes.object.isRequired,
    roles: React.PropTypes.array.isRequired,
    personsRoles: React.PropTypes.array.isRequired,
    groups: React.PropTypes.array.isRequired,
    loggedUser: React.PropTypes.array.isRequired,
    selected: React.PropTypes.array.isRequired
};
