import { Schema, model, Document, models } from 'mongoose';

export interface ITag extends Document {
  name: string;
  description?: string;
  followers: Schema.Types.ObjectId[];
  questions: Schema.Types.ObjectId[];
  createdAt: Date;
}

const TagSchema = new Schema<ITag>({
  name: { type: String, required: true, unique: true },
  description: { type: String },
  questions: [{ type: Schema.Types.ObjectId, ref: 'Question' }],
  followers: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  createdAt: { type: Date, default: Date.now() }
})

const Tag = models.Tag || model('Tag', TagSchema)

export default Tag;