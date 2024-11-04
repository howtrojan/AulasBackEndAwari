import userService from "../../services/user/user.service.js";

class UserController {
  async list(req, res) {
    try {
      const response = await userService.searchUsers();
      return res.status(200).json(response[0]);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  async create(req, res) {
    try {
      const checkEmail = await CheckEmailUtil.searchUsers(req.body.email);
      if (!checkEmail || checkEmail.count === 0) {
        const response = await userService.createUser(req.body);
        return res.status(201).json(response);
      } else {
        return res.status(400).json({ message: "Email already exists" });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  async update(req, res) {
    try {
    if (!checkEmail || checkEmail.count === 0) {
      const id = req.params.id;
      const response = userService.updateUser(req.body, id);
      return res.status(200).json(response);}else {
        return res.status(400).json({ message: "Email already exists" });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  async delete(req, res) {
    try {
      const id = req.params.id;
      const response = userService.deleteUser(id);
      return res.status(200).json(response);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  }
}

export default new UserController();
