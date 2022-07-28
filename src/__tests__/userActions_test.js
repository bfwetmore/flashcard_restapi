describe('User Actions', () => {
    const UserActions = require('../actions/userActions');
    const userActions = new UserActions();

    test("passwordFormatCheck should throw and Error if format isn't met.", async () => {
        await expect(userActions.passwordFormatCheck('tests')).rejects.toThrow(Error);
    });

    test('passFormatCheck should return nothing if format is met.', async () => {
        await expect(userActions.passwordFormatCheck('passingPassword!')).resolves.toBeUndefined();
    });
});