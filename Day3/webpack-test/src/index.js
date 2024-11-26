// import { orderBy } from 'lodash';

import { orderBy } from 'lodash/orderBy';
// import { sortBy } from 'lodash/sortBy';

var users = [
    { 'user': 'fred', 'age': 48 },
    { 'user': 'barney', 'age': 34 },
    { 'user': 'fred', 'age': 40 },
    { 'user': 'barney', 'age': 36 }
];

// Sort by `user` in ascending order and by `age` in descending order.
orderBy(users, ['user', 'age'], ['asc', 'desc']);