import { UserModel, UserTable } from '../models/user.model.js'
// import db from '../../../configs/mysql/mysql.db.js'
import { doQuery } from '../../../configs/mysql/mysql.db.js'

const UserService = {
  create: (payload) => {
    // return db.doQuery(`INSERT INTO ${UserTable} SET ?`, payload)
    return doQuery(`INSERT INTO ${UserTable} SET ?`, payload)
  },
  getAll: (columns = UserModel) => {
    const options = [columns, UserTable]

    return doQuery('SELECT ?? FROM ?? WHERE active = "y"', options)
  }
}

export default UserService
