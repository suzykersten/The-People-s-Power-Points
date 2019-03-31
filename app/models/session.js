module.exports = (sequelize, DataTypes) => {

    const session = sequelize.define('session', {
        // attributes
        session_id: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        name: {
          type: DataTypes.STRING
          // allowNull defaults to true
        }
      }, {
        // options
        freezeTableName: true
      });

      return session;
};