
// import Person from './Person';
// const { Input, Button } = ReactBootstrap;

export default class Board1 extends React.Component {
    render() {
        return (
            <div>{this.props.persons.map((el, id) => {
                return <span key={id}>{el.name}</span>;
            })}</div>
        );
    }
}

Board1.propTypes = {
    persons: React.PropTypes.array.isRequired
};
