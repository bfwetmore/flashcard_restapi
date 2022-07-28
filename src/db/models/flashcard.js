import Sequelize from 'sequelize';

export default (sequelize) => {
    class Flashcard extends Sequelize.Model {
    }

    Flashcard.init({
        question: {
            type: Sequelize.STRING,
            allowNull: false
        },
        answer: {
            type: Sequelize.STRING,
            allowNull: false
        },
        hint: {
            type: Sequelize.STRING,
            allowNull: false
        },
    }, {
        timestamps: false,
        sequelize,
    });

    return Flashcard;
};
