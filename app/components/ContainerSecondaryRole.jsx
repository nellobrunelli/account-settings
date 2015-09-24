import appStore from '../stores/appStore';
import RoleAvailability from './RoleAvailability';
import RoleDescription from './RoleDescription';
import PrimaryRolePersons from './PrimaryRolePersons';
import RolePersonsAssigned from './RolePersonsAssigned';
// import AddUser from './AddUser';

export default class ContainerSecondaryRole extends React.Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        style: React.PropTypes.object,
        subscription: React.PropTypes.object.isRequired
    }

    getSecondaryRoles = () => {
        if (Object.keys(this.props.subscription).length > 0) {
            let selectedGroup = this.props.subscription.subscription.selectedGroup;
            let group = this.props.subscription.subscription.subscription.groups[selectedGroup];

            return (
                <div>
                    {
                        // Ciclo sui Roles
                        Object.keys(group.roles).map((roleId) => {
                            let role = group.roles[roleId];

                            // Ciclo sui secondary Roles
                            Object.keys(role.secondaryRoles).map((secondaryRoleId) => {
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
                                        roleId: roleId,
                                        userId: userId,
                                        description: appStore.getStore('users', userId)
                                    };
                                });

                                console.log('*** secondary roles ***');
                                console.log(secondaryRoleId);
                                console.log(secondaryRole);
                                console.log('------------------------');
                                console.log(usersAssigned);
                                console.log(usersAvaiable);
                                console.log(roleAvailability);
                                console.log(roleObj);
                                console.log('***********************');


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
                                      <PrimaryRolePersons
                                          usersAvaiable={usersAvaiable}
                                      />
                                      <RolePersonsAssigned
                                          usersAssigned={usersAssigned}
                                      />
                                    </div>
                                );
                            });
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
