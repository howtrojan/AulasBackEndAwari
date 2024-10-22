import userService from "../../services/user/user.service.js";

class UserController{
    List(req, res){
        const response = userService.searchUsers();
        return res.status(200).json(response);
    }

    Create(req, res){
        const {nome, sobrenome, curso, instituicao} = req.body;
        console.log({nome, sobrenome, curso, instituicao});
        return res.status(200).json({nome, sobrenome, curso, instituicao});
    }

    Update(req, res){
        const {nome, sobrenome, curso, instituicao} = req.body;
        console.log({nome, sobrenome, curso, instituicao});
        return res.status(200).json({nome, sobrenome, curso, instituicao});
    }

    Delete(req, res){    
        const {id} = req.params;
        console.log({nome, sobrenome, curso, instituicao});
        return res.status(200).json({id});
    }
}

export default new UserController();