import UserService from '../services/userService';
import UserDB from '../db/userDb';
import UserActions from '../actions/userActions';

describe('User Service', () => {

    test('createUser calls each method once.', async () => {
        const hashTextMock = jest
            .spyOn(UserActions.prototype, 'hashText');

        const passwordFormatCheckMock = jest
            .spyOn(UserActions.prototype, 'passwordFormatCheck');

        const insertUserMock = jest
            .spyOn(UserDB.prototype, 'insertUser')
            .mockImplementation(() => {
                return true;
            });

        const userService = new UserService(new UserDB(), new UserActions());
        await userService.createUser("test", "password");

        expect(hashTextMock).toHaveBeenCalledTimes(1);
        expect(passwordFormatCheckMock).toHaveBeenCalledTimes(1);
        expect(insertUserMock).toHaveBeenCalledTimes(1);
    });

    describe("checkUserCredentials", () => {

        const selectUserMock = jest
            .spyOn(UserDB.prototype, 'selectUser')
            .mockImplementation(() => {
                return [{password: 0}];
            });

        const authenticatePasswordMock = jest
            .spyOn(UserActions.prototype, 'authenticatePassword')
            .mockImplementation(() => {
                return false;
            });

        const userService = new UserService(new UserDB(), new UserActions());

        test('checkUserCredentials calls each method once.', async () => {
            await userService.checkUserCredentials("test", "test");
            expect(selectUserMock).toHaveBeenCalledTimes(1);
            expect(authenticatePasswordMock);
        });

        test('checkUserCredentials should return Incorrect Username message if authentication is false.', async () => {
            const returnedFalse = await userService.checkUserCredentials("test", "test");
            expect(returnedFalse).toEqual({
                "message": "Incorrect Username or Password"
            });
        });

        test('checkUserCredentials should return Login Successful message if authentication is true.', async () => {
            authenticatePasswordMock.mockImplementation(() => true);
            const returnedFalse = await userService.checkUserCredentials("test", "test");
            expect(returnedFalse).toEqual({
                "message": "Login Successful!"
            });
        });
    });
});
