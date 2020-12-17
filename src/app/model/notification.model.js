import mongoose from 'mongoose';

let Schema = mongoose.Schema;

let NotificationSchema = new Schema({
    sender: {
        id: String,
        user: String,
        avatar: String,
    },
    receiver: {
        id: String,
        user: String,
        avatar: String,
    },
    type: String,
    content: String,
    isRead: { type: Boolean, default: false },
    createdAt: { type: Number, default: Date.now() }
})

module.exports = mongoose.model("notification", NotificationSchema)//trong moongo se tu them thanh so nhieu