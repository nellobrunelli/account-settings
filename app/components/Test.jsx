export default class Test extends React.Component {
    constructor(props) {
        super(props);
        this.setGroup = this.setGroup.bind(this);
        // console.log('test contructor');
    }

    static propTypes = {
        miao: React.PropTypes.string
    }

    componentDidMount() {
        console.log(this.props);
        // console.log(this.props.appState);
        // this.props.appState.groups.map(function(el2) {
        //     console.log('componentDidMount');
        //     console.log(el2);
        // });
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        console.log('test will recieve');
    }

    setGroup() {
        console.log('showSubgroups');
        console.log('setGroupScenario');
    }

    render() {
        return (
          <div>
              component di test
          </div>
      );
    }
}
