import * as SQLite from 'expo-sqlite/next';

export async function getDbConnection() {
    const cx = await SQLite.openDatabaseAsync('dbUsuarios.db');
    return cx;
}

export async function createTable() {    
    const query = `CREATE TABLE IF NOT EXISTS tbRegistros
        (
            cod text not null primary key,
            nome text not null,
            email text not null,
            senha text not null          
        )`;
    var cx = await getDbConnection();
    await cx.execAsync(query);   
    await cx.closeAsync() ;
};

export async function obtemTodosRegistros() {

    var retorno = []
    var dbCx = await getDbConnection();
    const registros = await dbCx.getAllAsync('SELECT * FROM tbRegistros');
    await dbCx.closeAsync() ;

    for (const registro of registros) {        
        let obj = {
            cod: registro.cod,
            nome: registro.nome,
            email: registro.email,
            senha: registro.senha            
        }
        retorno.push(obj);
    }

    return retorno;
}

export async function adicionaRegistro (registro) {    
    let dbCx = await getDbConnection();    
    let query = 'insert into tbRegistros(cod, nome, email, senha) values (?,?,?,?)';
    const result = await dbCx.runAsync(query, [registro.cod, registro.nome, registro.email, registro.senha]);    
    await dbCx.closeAsync() ;    
    return result.changes == 1;    
}

export async function alteraRegistro(registro) {
    let dbCx = await getDbConnection();
    let query = 'update tbContatos set nome=?, email=?, senha=? where cod=?';
    const result = await dbCx.runAsync(query, [registro.cod, registro.nome, registro.email, registro.senha]);
    await dbCx.closeAsync() ;
    return result.changes == 1;
}

export async function excluiRegistro(cod) {
    let dbCx = await getDbConnection();
    let query = 'delete from tbRegistros where id=?';
    const result = await dbCx.runAsync(query, cod);
    await dbCx.closeAsync() ;
    return result.changes == 1;    
}

export async function excluiTodosRegistros() {
    let dbCx = await getDbConnection();
    let query = 'delete from tbRegistros';    
    await dbCx.execAsync(query);    
    await dbCx.closeAsync() ;
}