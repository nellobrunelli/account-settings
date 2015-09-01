const { Button } = ReactBootstrap;

export default class RolePerson extends React.Component {
    constructor(props) {
        super(props);

        this.handleRemove = this.handleRemove.bind(this);
    }

    handleRemove() {
        console.log('removing');
    }

    render() {
        return (
          <div>
            <span style={{
                margin: 10
            }}>{this.props.personName}</span>
            <Button onClick={this.handleRemove}>Remove</Button>
          </div>
        );
    }
}

RolePerson.propTypes = {
    personName: React.PropTypes.string.isRequired
};
