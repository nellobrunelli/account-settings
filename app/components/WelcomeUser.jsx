export default class WelcomeUser extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div>
            <div>Welcome, {this.props.userName} </div>
          </div>
        );
    }
}

WelcomeUser.propTypes = {
    userName: React.PropTypes.string.isRequired
};
