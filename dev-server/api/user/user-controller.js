import User from '../../model/user-model'

export function index (req, res) {
  // Find all Users
  User.find({}, (error, users) => {
    if (error) {
      return res.status(500).json()
    }
    return res.status(200).json({ users: users })
  })
}

export function show (req, res) {
  // Get User by Id
  User.findOne({ _id: req.params.id }, (error, user) => {
    if (error) {
      return res.status(500).json()
    }
    if (!user) {
      return res.status(404).json()
    }
    return res.status(200).json({ user: user })
  })
}
