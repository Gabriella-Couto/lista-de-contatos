import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase("agendaContatos.db");

export const buscarContato = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql('SELECT * FROM contato ORDER BY NOME ASC',
                [],
                (_, resultado) => { resolve(resultado) },
                (_, err) => { reject(err) }
            )
                ;
        });
    });
    return promise;
}

export const editarContato = (id, nome, fone, imagem) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(`UPDATE contato SET NOME = ?, FONE = ?, IMAGEM = ? WHERE ID = ?`,
                [nome, fone, imagem, id],
                (_, resultado) => { resolve(resultado) },
                (_, err) => { reject(err) }
            )
                ;
        });
    });
    return promise;
}

export const inserirContato = (nome, fone, imagemUri) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql('INSERT INTO contato (nome, fone, imagem) VALUES (?,?,?);',
                [nome, fone, imagemUri],
                (_, resultado) => { resolve(resultado) },
                (_, err) => { reject(err) }
            )
                ;
        });
    });
    return promise;
}

export const init = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql('CREATE TABLE contato (id INTEGER PRIMARY KEY, nome TEXT NOT NULL, fone INTEGER NOT NULL, imagem TEXT NOT NULL);',
                [],
                () => { resolve() },
                (_, err) => { reject(err) }
            )
                ;
        });
    });
    return promise;
}

export const excluirContato = (id) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql('DELETE FROM contato WHERE ID = ?',
                [id],
                () => { resolve() },
                (_, err) => { reject(err) }
            )
                ;
        });
    });
    return promise;
}