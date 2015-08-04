export default class Board1 extends React.Component {

    // componentWillReceiveProps(nextProps) {
    //     console.log(nextProps);
    // }

    // ciao mamma sono sul branch
    render() {
        return (
            <div>
            {this.props.persons.map((el, id) => {
                return <span key={id}>{el.name}<br /></span>;
            })}

            {this.props.roles.map((el, id) => {
                return <span key={id}>{el}<br /></span>;
            })}
            </div>

        );
    }
}

Board1.propTypes = {
    persons: React.PropTypes.array.isRequired,
    roles: React.PropTypes.array.isRequired,
    personsRoles: React.PropTypes.array.isRequired
};
