import mongoose from 'mongoose'

export const connectToDb = async () => {
  mongoose.set('strictQuery', true)
  let isConnected = false

  if (!process.env.MONGO_URI) {
    return console.log('missing mongo uri key')
  }

  if (isConnected) {
    console.log('mongo connection already established')
    return
  }

  try {
    await mongoose.connect(process.env.MONGO_URI)
    isConnected = true
    console.log('connected to mongo')
  } catch (error) {
    console.log(error)
  }
}
