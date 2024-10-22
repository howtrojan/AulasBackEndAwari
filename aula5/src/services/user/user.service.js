class UserService {
    searchUsers() {
        return [{
            nome: 'Joaquim',
            sobrenome: 'Silva',
            curso: 'Javascript',
            instituicao: 'ETEC'
       },{
           nome: 'Pedro', 
           sobrenome: 'Silva',
           curso: 'Javascript',
           instituicao: 'ETEC'            
       }]
    }
}    

export default new UserService();