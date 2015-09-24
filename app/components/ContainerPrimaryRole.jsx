import appStore from '../stores/appStore';
import RoleAvailability from './RoleAvailability';
import RoleDescription from './RoleDescription';
import RolePersons from './RolePersons';
import RolePersonsAssigned from './RolePersonsAssigned';
import AddUser from './AddUser';

export default class ContainerPrimaryRole extends React.Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        style: React.PropTypes.object,
        subscription: React.PropTypes.object.isRequired
    }

    getPrimaryRoles = () => {
        if (Object.keys(this.props.subscription).length > 0) {
            let selectedGroup = this.props.subscription.subscription.selectedGroup;
            let selectedSubgroup = this.props.subscription.subscription.selectedSubgroup;

            let group = false;
            if (selectedSubgroup === false) {
                // Selezionato Gruppo
                group = this.props.subscription.subscription.subscription.groups[selectedGroup];
            } else {
                // Selezionato Subgruppo
                group = this.props.subscription.subscription.subscription.groups[selectedGroup].selectedSubgroup[selectedSubgroup];
            }
            return (
                <div>
                    {
                        // Ciclo sui Roles
                        Object.keys(group.roles).map((roleId) => {
                            let role = group.roles[roleId];
                            let roleAvailability = role.avaiable[0] + '/' + role.avaiable[1] + ' avaiable';
                            let roleObj = appStore.getStore('roles', roleId);

                            // build avaiable users object
                            let usersAvaiable = {};
                            role.users.map((userId) => {
                                usersAvaiable[userId] = appStore.getStore('users', userId);
                            });

                            // build assigned users object
                            let usersAssigned = {};
                            role.assignedUsers.map((userId) => {
                                usersAssigned[userId] = {
                                    roleId: roleId,
                                    userId: userId,
                                    description: appStore.getStore('users', userId)
                                };
                            });

                            return (
                                <div>
                                  <hr></hr>
                                  <RoleAvailability
                                      roleData={{
                                          name: roleObj.name,
                                          availability: roleAvailability
                                      }}
                                  />
                                  <RoleDescription
                                      description={roleObj.description}
                                  />
                                  <AddUser>
                                      Add User
                                  </AddUser>
                                  <RolePersons
                                      usersAvaiable={usersAvaiable}
                                  />
                                  <RolePersonsAssigned
                                      usersAssigned={usersAssigned}
                                  />
                                </div>
                            );
                        })
                    }
                </div>
            );
        }
    }

    render() {
        let getPrimaryRoles = this.getPrimaryRoles();
        const {style} = this.props;

        return (
            <div style={style}>
                  {getPrimaryRoles}
            </div>
        );
    }
}
