let store = {
    groups: {},
    subgroups: {},
    roles: {},
    users: {}
};

export default {
    getStore(key, val) {
        console.log('Main -> getSTORE');
        switch (key) {
        case 'group':
            // console.log('groups');
            // console.log(key);
            // console.log(val);
            // console.log(this.store.groups);
            return store.groups[val];
        case 'subgroup':
            // console.log('----------------------');
            // console.log('subgroups');
            // console.log(this.store.subgroups[val]);
            // console.log(key);
            // console.log(val);
            // console.log('----------------------');
            return store.subgroups[val];
        default:
            console.log('WRONG PARAM ON GET STORE');
        }
    },

    getGroups() {
        return store.groups;
    },

    updateStore(key, val) {
        console.log('Main -> updateSTORE');
        switch (key) {
        case 'groups':
            // console.log('subgroups');
            // console.log(key);
            // console.log(val);
            store.groups = val.data.groups;
            break;
        case 'subgroups':
            // console.log('subgroups');
            // console.log(key);
            // console.log(val);
            store.subgroups = val.data.subgroups;
            break;
        case 'roles':
            // console.log('roles');
            // console.log(key);
            // console.log(val);
            store.roles = val.data.roles;
            break;
        case 'users':
            // console.log('users');
            // console.log(key);
            // console.log(val);
            store.users = val.data.users;
            break;
        default:
            console.log('WRONG PARAM ON UPDATE STORE');
        }
    }
};
