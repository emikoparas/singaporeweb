//models/userModel.js
import mongoose from "mongoose";

//create the user schema
const userSchema = new mongoose.Schema({
  //the 'name' field is mandatory
  name: {
    type: String,   
    required: true  
  },
  
  //the 'email' field is mandatory
  email: {
    type: String,   
    required: true  
  },

  //the 'Feedback' field is mandatory
  Feedback: {
    type: String,   
    required: true  
  }
});

//export the model to interact with the "User" data
export default mongoose.model("User", userSchema);
