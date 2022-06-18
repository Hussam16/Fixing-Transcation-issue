const Tedious = require('tedious');
const dbConfigSQL = require('../../cypress.json');
module.exports = (on) => {
   on('task', {'sqlServer:execute' : (sql) => {
    const connection = new Tedious.Connection(dbConfigSQL.db);
      return new Promise((res, rej) => {
        connection.on('connect', err => {
          if (err) {
            rej(err);
          }

          const request = new Tedious.Request(sql, function (err, rowCount, rows) {
            return err ? rej(err) : res(rows);
          });

          connection.execSql(request);
        });
      });
    }
  }
  )};