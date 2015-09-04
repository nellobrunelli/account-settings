import GroupList from './GroupList';
import SubgroupList from './SubgroupList';

export default class BoxSideBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: 0,
              padding: '1%'
          }}>
              <GroupList name={'Milan AC / Prima squadra'} />
              <SubgroupList />
          </div>
        );
    }
}
