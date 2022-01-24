const { Schema, model } = require("mongoose");


const userSchema = new Schema(
	{
		username: {
			type: String,
			trim: true,
		},

		password: {
			type: String,
			required: [true, "password can't be blank"],
		},

		profileImg: {
			type: String,
		},

		email: {
			type: String,
			lowercase: true,
			required: [true, "email can't be blank"],
			match: [/\S+@\S+\.\S+/, 'invalid email format'],
			unique: true
		},

		bio: {
			type: String,
			maxlength: [500, 'bio cant exceed 500 characters'],
		},

		favorites: [{
			type: Schema.Types.ObjectId, ref: "Sun"
		}],
	},

	{ timestamps: true }
);

const User = model("User", userSchema);

module.exports = User;
