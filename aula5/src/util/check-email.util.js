import connection from "../config/db/mysql.js";

class CheckEmailUtil {
  async searchUsers(email) {
    const response = await connection.query(
      `SELECT count(email) as count, id FROM users WHERE email = '${email}' group by id`
    );
    if ( response[0].length > 0  ) {
        console.log(response[0][0].count);
        return { count: response[0][0].count, id: response[0][0].id };  
    }else {
        return false;
    }    
  }
}

export default new CheckEmailUtil();
