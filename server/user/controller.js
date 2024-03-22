const UserModel = require("./model");

const userRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const isExisting__user = await UserModel.findOne({ email: email });
    if (isExisting__user) {
      return res.json({
        error: "User already exists",
        data: "Nothing to show",
      });
    } else {
      const newUser = await UserModel.create({ name, email, password });
      newUser.save();

      return res.status(200).json({
        success: "Registeration Successful",
        data: "Nothing to show",
      });
    }
  } catch (error) {
    return res.status(500).json({
      error: "An unexpected error encountered",
      data: error,
    });
  }
};

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const isExisting__user = await UserModel.findOne({ email: email });
    if (!isExisting__user) {
      return res.status(606).json({
        error: "User does not exists",
        data: "Success",
      });
    } 
    
    if(password !== isExisting__user.password){
      return res.json({
        error: "Email or password incorrect",
        data: "Nothing to show",
      });
    }

    return res.status(200).json({
      success: "Login Successful",
      data: isExisting__user
    })

  } catch (error) {
    return res.status(500).json({
      error: "An unexpected error encountered",
      data: error,
    });
  }
}

const allUsers = async (req, res) => {
  try {
    const areExisting__users = await UserModel.find();
    const UserList=areExisting__users
    return res.status(200).json(
      // areExisting__users
      {
      success: "Users found successfully",
      data: UserList
    }
    );
  } catch (error) {
    return res.status(500).json({
      error: "An unexpected error encountered",
      data: error,
    });
  }
}

module.exports = {
  userRegister,
  userLogin,
  allUsers
};
