import GroupList from './GroupList';
import appStore from '../stores/appStore';

export default class BoxSideBar extends React.Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        groups: React.PropTypes.object.isRequired,
        getData: React.PropTypes.func.isRequired
    }

    render() {
        let groups = Object.keys(this.props.groups).map(gId => {
            return {
                id: gId,
                name: appStore.getStore('group', gId),
                subgroups: this.props.groups[gId].subgroups.map(sgId => {
                    return {
                        id: sgId,
                        name: appStore.getStore('subgroup', sgId).name
                    };
                })
            };
        });

        return (
          <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: 0,
              padding: '1%'
          }}>
              <GroupList
                  groups={groups}
                  handleGroupSelect = {groupId => {
                      console.log('Group id ', groupId);
                      this.props.getData('group', groupId);
                  }}
                  handleSubgroupSelect = {(groupId, subgroupId) => {
                      console.log('subgroup selected', groupId, subgroupId);
                      this.props.getData(
                          'subgroup',
                          {
                              groupId: groupId,
                              subgroupId: subgroupId
                          }
                      );
                  }}
              />
          </div>
        );
    }
}
