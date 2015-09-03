import Managing from './Managing';
import ContainerPrimaryRole from './ContainerPrimaryRole';
import ContainerSecondaryRole from './ContainerSecondaryRole';
const { Tabs, Tab } = ReactBootstrap;


export default class BoxManaging extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            key: 1
        };

        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(key) {
        this.setState({key});
        console.log('selected tab ' + key);
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

              <Managing name={'Milan AC / Milan Prima squadra'} />

              <Tabs activeKey={this.state.key} onSelect={this.handleSelect}>
                <Tab eventKey={1} title="Users & Primary Roles">
                  <ContainerPrimaryRole style={{backgroundColor: '#E8E8E8', marginTop: '10px'}} />
                </Tab>
                <Tab eventKey={2} title="Secondary Roles">
                    <ContainerSecondaryRole style={{backgroundColor: '#E8E8E8', marginTop: '10px'}} />
                </Tab>
              </Tabs>
          </div>
        );
    }
}
