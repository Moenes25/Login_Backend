import mongoose from "mongoose";

export const Admin = mongoose.model("Admin", {
	_company: String,
	name: String ,
	username: String,
	email: String,
	password: String ,
	admin: Boolean,
	address: String ,
	type: String,
	updateDate: String
});
