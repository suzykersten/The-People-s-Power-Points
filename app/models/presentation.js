module.exports = (sequelize, DataTypes) => {

    const presentation = sequelize.define('presentation', {
        // attributes
        presentation_id: {
            type: DataTypes.INTEGER,
            omitNull: true
        },
        session_id: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        url: {
          type: DataTypes.STRING,
          allowNull: false
          // allowNull defaults to true
        },
        position: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
      }, {
        // options
        freezeTableName: true,
        timestamps: false
      });

      presentation.removeAttribute("id");
      presentation.removeAttribute("createdAt");
      presentation.removeAttribute("updatedAt");

      return presentation;
};