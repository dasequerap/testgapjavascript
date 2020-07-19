const { loadFeature, defineFeature } = require('jest-cucumber');
//const { SinglyLinkedList } = require('./tests');

const feature = loadFeature('../features/test.feature', { loadRelativePath: true, errors: true });

defineFeature(feature, test => {
    test('Test scenario', ({ given, when, then, and }) => {

        let list;

        given('preconditions', () => {
            expect(list).toBeUndefined;
        });
        when('actions', () => {
            expect(1).toBe(1);
        });
        then('results', () => {
            expect(true).toBe(true);
        });
    });
});