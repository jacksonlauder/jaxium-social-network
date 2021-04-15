import mongoose from 'mongoose'
import { StringUtil } from '../utilities/string-util'
import bcrypt from 'bcrypt-nodejs'

const followersSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' }
})

const followeringSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' }
})

const blockedSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' }
})

const userSchema = new mongoose.Schema({
  username: String,
  first: String,
  last: String,
  password: String,
  email: String,
  userLocation: String,
  userWebsite: String,
  userDescription: String,
  followers: [followersSchema],
  following: [followeringSchema],
  blocked: [blockedSchema],
})

userSchema.set('timestamps', true)
userSchema.virtual('fullName').get(function () {
  const first = StringUtil.capitalize(this.first.toLowerCase())
  const last = StringUtil.capitalize(this.last.toLowerCase())
  return `${first} ${last}`
})
userSchema.statics.passwordMatches = function (password, hash) {
  return bcrypt.compareSync(password, hash)
}
userSchema.pre('save', function (next) {
  this.username = this.username.toLowerCase()
  this.first = this.first.toLowerCase()
  this.last = this.last.toLowerCase()
  const unsafePassword = this.password
  this.password = bcrypt.hashSync(unsafePassword)
  this.email = this.email.toLowerCase()
  next()
})

export default mongoose.model('user', userSchema)
