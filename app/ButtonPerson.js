import ButtonPersonContent from './ButtonPersonContent';

export default class ButtonPerson extends React.Component {
    render() {
        return (
            <ButtonPersonContent handleClick={this.props.handleClick}/>
        );
    }
}

ButtonPerson.propTypes = {
    handleClick: React.PropTypes.func.isRequired
};
