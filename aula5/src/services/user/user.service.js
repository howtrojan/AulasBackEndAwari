import connection from "../../config/db/mysql.js";
import CheckEmailUtil from "../../util/check-email.util.js";

class UserService {
  async searchUsers() {
    try {
      const users = await connection.query(
        `SELECT   id,
                  name,
                  surname,
                  email, 
                  documentNumber,
                  address_street,
                  address_number,
                  address_complement,
                  address_locality,
                  address_city,
                  address_region,
                  address_country,
                  address_postalCode
        FROM users`
      );
      return users;
    } catch (error) {
      throw error;
    }
  }

  async createUser(payload) {
    try {
      const checkEmail = await CheckEmailUtil.searchUsers(payload.email);
      if (!checkEmail || checkEmail.count === 0) {
        const users = await connection.query(
          `INSERT INTO users
        (name, surname, email, password)
        VALUES
        ('${payload.name}', 
        '${payload.surname}', 
        '${payload.email}', 
        '${payload.password}')`
        );
        return users;
      }
      return false;
    } catch (error) {
      throw error;
    }
  }

  async updateUser(payload, id) {
    try {
      const checkEmail = await CheckEmailUtil.searchUsers(payload.email);
      if (
        checkEmail.count === 0 ||
        (checkEmail.count === 1 && checkEmail.id == id)
      ) {
        const users = await connection.query(
          `UPDATE users
          SET name = '${payload.name}',
          surname = '${payload.surname}',
          email = '${payload.email}'
          WHERE id = ${id}`
        );
        return users;
      }
      return "Email dont exists";
    } catch (error) {
      throw error;
    }
  }

  async deleteUser(id) {
    try {
      const users = await connection.query(
        `DELETE FROM users WHERE id = ${id}`
      );
      return users;
    } catch (error) {
      throw error;
    }
  }
}

export default new UserService();
