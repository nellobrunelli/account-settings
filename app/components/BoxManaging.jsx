import Managing from './Managing';
// import ManagingRoles from './ManagingRoles';

export default class BoxManaging extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            key: 1
        };

        this.handleSelect = this.handleSelect.bind(this);
    }

    static propTypes = {
        getData: React.PropTypes.func.isRequired
    }

    handleSelect(key) {
        this.setState({key});
        console.log('selec ted tab ' + key);
    }

    render() {
        return (
          <div style={{
              backgroundColor: '#E0E0E0',
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 0,
              left: '400px',
              padding: '1%'
          }}>
              <Managing
                  getData={this.props.getData}
              />
              {/* <ManagingRoles
                  getData={this.props.getData}
              />*/}
          </div>
        );
    }
}
