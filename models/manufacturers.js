const Manufacturers = (connection, Sequelize) => {
  return connection.define(
    'manufacturers',
    {
      id: { type: Sequelize.INTEGER, auto_increment: true, primaryKey: true },
      name: { type: Sequelize.STRING, allowNull: false },
      country: { type: Sequelize.STRING },
    },
    { paranoid: true }
  );
};

module.exports = Manufacturers;
