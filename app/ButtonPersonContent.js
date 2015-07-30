export default class ButtonPersonContent extends React.Component {
    render() {
        return (
            <button onClick={() => {
                this.props.handleClick({
                    id: 4,
                    name: 'Nello'
                });
            }}>Add person</button>
        );
    }
}

ButtonPersonContent.propTypes = {
    handleClick: React.PropTypes.func.isRequired
};
