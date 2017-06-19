import test from 'ava';
import { getAvailableMeals } from '../lib/brands';

test('brands', (t) => {
    // init store with data, then grab it and check
    getAvailableMeals('hi');
    t.pass();
});

async function fn() {
    return Promise.resolve('foo');
}

test(async (t) => {
    t.is(await fn(), 'foo');
});
