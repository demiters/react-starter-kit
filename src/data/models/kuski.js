import DataType from 'sequelize';
import Model from '../sequelize';

const Kuski = Model.define(
  'kuski',
  {
    KuskiIndex: {
      type: DataType.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },

    Kuski: {
      type: DataType.STRING(15),
      allowNull: false,
      defaultValue: '',
    },

    TeamIndex: {
      type: DataType.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },

    Country: {
      type: DataType.STRING(2),
      allowNull: false,
    },

    Password: {
      type: DataType.STRING(32),
      allowNull: false,
      defaultValue: '',
    },

    Rights: {
      type: DataType.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },

    BmpCRC: {
      type: DataType.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },

    BmpData: {
      type: DataType.BLOB,
      allowNull: true,
    },

    RPlay: {
      type: DataType.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },

    RStartBattle: {
      type: DataType.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },

    RSpecialBattle: {
      type: DataType.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },

    RStartCup: {
      type: DataType.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },

    RStart24htt: {
      type: DataType.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },

    RStop: {
      type: DataType.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },

    RMultiPlay: {
      type: DataType.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },

    RChat: {
      type: DataType.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },

    RBan: {
      type: DataType.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },

    RMod: {
      type: DataType.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },

    RAdmin: {
      type: DataType.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },

    Confirmed: {
      type: DataType.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    indexes: [{ fields: ['Country', 'Kuski', 'TeamIndex'] }],
  },
);

export default Kuski;
