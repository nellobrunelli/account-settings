import 'bootstrap/dist/css/bootstrap.min.css';
import './css/ReactCSSTransitionGroup.css';

import Main from './components/Main';
React.render(<Main />, document.getElementById('app'));

// TEST AUTOMATICi COMPONENTE GroupList
// TEST AUTOMATICi COMPONENTE GroupList
// import GroupList from './components/GroupList';
// window.React = React;
// window.comp = (<GroupList
//     groups={[{
//         id: 123,
//         name: 'brokki',
//         subgroups: [{
//             id: 123,
//             name: 'subbrokki'
//         }, {
//             id: 124,
//             name: 'subbrokki 2'
//         }]
//     }, {
//         id: 125,
//         name: 'brokkissimi',
//         subgroups: [{
//             id: 123,
//             name: 'subbrokki'
//         }]
//     }]}
//     handleGroupSelect={() => {
//         console.log('gruppo selezionato');
//     }}
//     handleSubgroupSelect={() => {
//         console.log('subgruppo selezionato');
//     }}
// />);
//
//
// if ((React.renderToStaticMarkup(comp).match(/subgroup/g).length !== 3)) {
//     console.log('%c Test GroupList -> Groups KO', 'background: red; color: white;');
// } else {
//     console.log('%c Test GroupList -> Groups OK', 'background: green; color: white;');
// }
//
// if ((React.renderToStaticMarkup(comp).match(/group-panel/g).length !== 2)) {
//     console.log('%c Test GroupList -> Subgruppi ok', 'background: red; color: white;');
// } else {
//     console.log('%c Test GroupList -> Groups KO', 'background: green; color: white;');
// }

// ================================================================================

// import Managing from './components/Managing';
// window.React = React;
// window.comp = (<Managing
//     managedTitle="Milan AC - Brocchi"
// />);
//
// if ((React.renderToStaticMarkup(comp).match(/Milan AC - Brocchi/g).length !== 1)) {
//     console.log('%c Test Managing ->  KO', 'background: red; color: white;');
// } else {
//     console.log('%c Test Managing ->  OK', 'background: green; color: white;');
// }


// ================================================================================

// import ContainerRole from './components/ContainerRole';
// React.render(<ContainerRole />, document.getElementById('app'));

// import RolePerson from './components/RolePerson';
// React.render(<RolePerson personName="Franco Puppo" />, document.getElementById('app'));

// import RoleAvailability from './components/RoleAvailability';
// React.render(<RoleAvailability roleData={{name: 'Scout', availability: '3/4 avaiable'}} />, document.getElementById('app'));

// import RolePersonList from './components/RolePersonList';
// React.render(<RolePersonList personList={['Tizio', 'Caio', 'Sempronio']} />, document.getElementById('app'));

// import RoleDescription from './components/RoleDescription';
// React.render(<RoleDescription description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in tempus ut, vehicula eu diam. Pellentesque rhoncus aliquam mattis. Ut vulputate eros sed felis sodales nec vulputate justo hendrerit. Vivamus varius pretium ligula, a aliquam odio euismod sit amet. Quisque laoreet sem sit amet orci ullamcorper at ultricies metus viverra. Pellentesque arcu mauris, malesuada quis ornare accumsan, blandit sed diam.'} />, document.getElementById('app'));

// import AddUser from './components/AddUser';
// React.render(<AddUser roleId={{roleId: 12345678}}/>, document.getElementById('app'));

// *** per la side bar
// import GroupList from './components/GroupList';
// React.render(<GroupList/>, document.getElementById('app'));

// *** per la side bar
// import SubgroupList from './components/SubgroupList';
// React.render(<SubgroupList/>, document.getElementById('app'));

// *** gruppo o subgruppo in fase di managing
// import Managing from './components/Managing';
// React.render(<Managing name={'Milan AC / Prima squadra'}/>, document.getElementById('app'));

// *** Welocme, Galliani
// import Welcome from './components/WelcomeUser';
// React.render(<Welcome userName={'Galliani'}/>, document.getElementById('app'));
