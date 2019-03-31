module.exports = (sequelize, DataTypes) => {

    const session = sequelize.define('session', {
        // attributes
        session_id: {
          type: DataTypes.INTEGER,
          omitNull: true
        },
        name: {
          type: DataTypes.STRING
          // allowNull defaults to true
        }
      }, {
        // options
        freezeTableName: true,
        timestamps: false
      });

      session.removeAttribute("id");

      return session;
};