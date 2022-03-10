import UserService from '../services/user.service.js'

const UserController = {
  createUser: async (req, res) => {
    try {
      const { name, email } = req.body
      const created = await UserService.create({ name, email })

      res.status(201).json({
        success: true,
        data: created
      })
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      })
    }
  },
  getAll: async (req, res) => {
    try {
      const users = await UserService.getAll()

      res.status(200).json({
        success: true,
        data: users
      })
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      })
    }
  }, 
}

export default UserController