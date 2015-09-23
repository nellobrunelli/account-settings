import React from 'react';
import { jsdom } from 'jsdom';

import { equal, test } from './testUtils';

import GroupList from '../app/components/GroupList';

console.log('\n*** Section - GroupList component tests ***\n');

let passed = 0;
let failed = 0;

test(() => {
    const dummyData = [{
        id: 123,
        name: 'brokki',
        subgroups: [{
            id: 123,
            name: 'subbrokki'
        }, {
            id: 124,
            name: 'subbrokki 2'
        }]
    }, {
        id: 125,
        name: 'brokkissimi',
        subgroups: [{
            id: 123,
            name: 'subbrokki'
        }]
    }];

    const node = jsdom(React.renderToStaticMarkup(<GroupList groups={dummyData} />));

    equal(
        node.querySelectorAll('.group-panel').length,
        2,
        'Component has two group-panel elements.'
    ) ? passed++ : failed++;

    equal(
        node.querySelectorAll('.subgroup').length,
        3,
        'Component has three subgroup elements.'
    ) ? passed++ : failed++;
});


console.log('\n*** End section ***');
console.log('*** ' + passed + ' passed, ' + failed + ' failed ***');

if (failed) {
    console.error('Fatal error: some tests have failed');
}

//
// import MonthHeader from '../app/components/MonthHeader';
//
// var passed = 0, failed = 0;
//
// console.log('\n*** Section - MonthHeader component tests ***\n');
//
// test(() => {
//     var node = jsdom(React.renderToStaticMarkup((
//         <MonthHeader
//             monthNumber={4}
//             yearNumber={2015}
//             monthTotal={11}
//         />
//     )));
//
//     var spans = node.querySelectorAll('span');
//
//     equal(
//         spans.length,
//         2,
//         'Component has two <span> elements.'
//     ) ? passed++ : failed++;
//
//     equal(
//         spans[0].textContent,
//         'aprile 2015',
//         'Component renders month and year correctly.'
//     ) ? passed++ : failed++;
//
//     equal(
//         spans[1].textContent,
//         '€ 11.00',
//         'Component renders total value correctly.'
//     ) ? passed++ : failed++;
// });
//
// console.log('\n*** End section ***');
// console.log('*** ' + passed + ' passed, ' + failed + ' failed ***');
//
// if(failed) {
//     console.error('Fatal error: some tests have failed');
// }
