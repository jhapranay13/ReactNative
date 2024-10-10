import * as SQLite from 'expo-sqlite';

const database = SQLite.openDatabaseSync('places.db');

export const init = () => {
    return new Promise( (resolve, reject) => {
        database.transaction(
            (tx) => {
                tx.executeSql(`CREATE TABLE IF NOT EXISTS places (
                    id INTEGER PRIMARY KEY NOT NULL, 
                    title TEXT NOT NULL,
                    imageUri TEXT NOT NULL,
                    lat REAL NOT NULL,
                    lng REAL NOT NULL)`,
                [],    //arry of values for the statement
                () => { resolve();},    // callback if success
                (_, error) => { reject(error)}  //callback if failure    
                );
            }
        );
    }); 
    
}

export const insert = (place) => {
    return new Promise( (resolve, reject) => {
        database.transaction(
            (tx) => {
                tx.executeSql(`INSERT INTO places (title, imageUri, location)
                    VALUES (?, ? ,?)`,
                [place.title, place.imageUri, place.location],    //arry of values for the statement
                (tranObj, result) => { 
                    console.log("from insert", result); 
                    resolve(result);
                },    // callback if success
                (_, error) => { reject(error)}  //callback if failure    
                );
            }
        );
    }); 
    
}

export const fetch = () => {
    return new Promise( (resolve, reject) => {
        database.transaction(
            (tx) => {
                tx.executeSql(`SELECT * FROM places`,
                [],    //arry of values for the statement
                (tranObj, result) => { 
                    console.log("from insert", result); 
                    resolve(result);
                },    // callback if success
                (_, error) => { reject(error)}  //callback if failure    
                );
            }
        );
    }); 
    
}
