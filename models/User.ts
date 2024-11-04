import  mongoose, { Schema, model } from  "mongoose";

export interface UserDocument {
    _id: string;
    name: string;
    email: string;
    passw: string;
    country: string;
    bday: string;
    joindate: Date;
    usertype: string;
    verified: boolean;
}

const UserSchema = new Schema<UserDocument>({
        email: {
            type: String,
            unique: true,
            required: [true, "Email is required"],
            match: [
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                "Email is invalid",
            ],
        },
        passw: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: [true, "Name is required"]
        }
    },
    {
        timestamps: true,
    }
);

const  User  =  mongoose.models?.users  ||  model<UserDocument>('users', UserSchema);
export  default  User;