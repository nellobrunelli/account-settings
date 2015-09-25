import appStore from '../stores/appStore';
import RoleAvailability from './RoleAvailability';
import RoleDescription from './RoleDescription';
import RolePersons from './RolePersons';
import RolePersonsAssigned from './RolePersonsAssigned';

export default class ContainerSecondaryRole extends React.Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        style: React.PropTypes.object,
        subscription: React.PropTypes.object.isRequired
    }

    exposeSubgroups = (role) => {
        // Ciclo sui secondary Roles
        return Object.keys(role.secondaryRoles).map((secondaryRoleId) => {
            let secondaryRole = role.secondaryRoles[secondaryRoleId];
            let roleAvailability = secondaryRole.avaiable[0] + '/' + role.avaiable[1] + ' avaiable';
            let roleObj = appStore.getStore('roles', secondaryRoleId);

            // build avaiable users object
            let usersAvaiable = {};
            secondaryRole.users.map((userId) => {
                usersAvaiable[userId] = appStore.getStore('users', userId);
            });

            // build assigned users object
            let usersAssigned = {};
            secondaryRole.assignedUsers.map((userId) => {
                usersAssigned[userId] = {
                    roleId: secondaryRoleId,
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
                  <RolePersons
                      usersAvaiable={usersAvaiable}
                  />
                  <RolePersonsAssigned
                      usersAssigned={usersAssigned}
                  />
                </div>
            );
        });
    }

    getSecondaryRoles = () => {
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
                            let exposeSubgroups = this.exposeSubgroups(role);
                            return (
                                <div>{exposeSubgroups}</div>
                            );
                        })
                    }
                </div>
            );
        }
    }

    render() {
        let getSecondaryRoles = this.getSecondaryRoles();
        const {style} = this.props;

        return (
            <div style={style}>
                  {getSecondaryRoles}
            </div>
        );
    }
}
