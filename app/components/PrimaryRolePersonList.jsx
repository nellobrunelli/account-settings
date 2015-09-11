const { SplitButton, MenuItem } = ReactBootstrap;

export default class PrimaryRolePersonList extends React.Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        appState: React.PropTypes.object.isRequired,
        updateState: React.PropTypes.func.isRequired,
        personList: React.PropTypes.array.isRequired
    }

    handleSelect = (personName) => {
        console.log(this);
        console.log(personName);
        console.log('handleSelect');
    }

    render() {
        return (
          <div>
            <SplitButton title="Select User" pullRight id="split-button-pull-right">
            {this.props.personList.map((personName, key) => {
                return (
                    <MenuItem onSelect={this.handleSelect.bind(this, personName)} eventKey={key}>
                        {personName}
                    </MenuItem>
                );
            })}
           </SplitButton>
          </div>
        );
    }
}
