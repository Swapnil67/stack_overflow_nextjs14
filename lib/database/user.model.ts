import { Schema, model, Document, models } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  password?: string;
  clerkId: string,
  bio?: string,
  picture: string,
  location?: string,
  portfolioWebsite?: string,
  reputation?: number,
  saved?: Schema.Types.ObjectId[],
  joinedAt: Date;
}

const UserSchema = new Schema<IUser>({
  bio: { type: String },
  location: { type: String },
  password: { type: String },
  portfolioWebsite: { type: String },
  name: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  picture: { type: String, required: true },
  clerkId: { type: String, required: true },
  reputation: { type: Number, default: 0 },
  saved: [{ type: Schema.Types.ObjectId, ref: 'Question' }],
  joinedAt: { type: Date, default: Date.now() },
})

const User = models.User || model('User', UserSchema)

export default User;