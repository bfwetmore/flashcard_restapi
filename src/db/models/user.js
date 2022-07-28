import Sequelize from 'sequelize';

export default (sequelize) => {
    class User extends Sequelize.Model {
    }

    User.init({
        username: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            minLength: 6,
            allowNull: false
        },
        role: {
            type: Sequelize.STRING,
            allowNull: false
        },
    }, {
        timestamps: false,
        sequelize,
    });

    return User;
};
