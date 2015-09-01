import 'bootstrap/dist/css/bootstrap.min.css';

import RolePersonList from './components/RolePersonList';
React.render(<RolePersonList personList={['Tizio', 'Caio', 'Sempronio']} />, document.getElementById('app'));

// import RolePerson from './components/RolePerson';
// React.render(<RolePerson personName="Franco Puppo" />, document.getElementById('app'));
