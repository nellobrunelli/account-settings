import GroupList from './GroupList';

import appStore from '../stores/appStore';

export default class BoxSideBar extends React.Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        groups: React.PropTypes.object.isRequired
    }

    render() {
        let groups = Object.keys(this.props.groups).map(gId => {
            return {
                id: gId,
                name: appStore.getStore('group', gId),
                subgroups: this.props.groups[gId].subgroups.map(sgId => {
                    return {
                        id: sgId,
                        name: appStore.getStore('subgroup', sgId)
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
                  handleGroupSelect={groupId => {
                      console.log('group selected', groupId);
                  }}
                  handleSubgroupSelect={(groupId, subgroupId) => {
                      console.log('subgroup selected', groupId, subgroupId);
                  }}
              />
          </div>
        );
    }
}
