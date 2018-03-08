/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import Sequelize from 'sequelize';
import config from '../config';

const { host, port, user, pass, database } = config.mysql;
const uri = `mysql://${user}:${pass}@${host}:${port}/${database}`;

const sequelize = new Sequelize(uri, {
  define: {
    freezeTableName: true,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log(`MySQL connection established at ${uri}`);
  })
  .catch(err => {
    console.error(`Unable to connect to MySQL database at ${uri}:`, err);
  });

export default sequelize;
