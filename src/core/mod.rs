use rusqlite::{version, Connection};
use std::path::Path;

pub struct AppState {
    pub path: String,
    pub sqlite_version: String,
    pub connection: Connection,
}
impl AppState {
    pub fn connect() -> AppState {
        let connection: Connection = Connection::open("./database.db").unwrap();
        AppState {
            sqlite_version: version().to_owned(),
            path: connection.path().unwrap().to_str().unwrap().to_owned(),
            connection,
        }
    }
    pub fn create_table(&self, table_definition: &str) {
        let statement: String = format!("CREATE TABLE IF NOT EXISTS {};", table_definition);
        match self.connection.execute_batch(statement.as_str()) {
            Ok(updated) => println!("{:?} rows were updated", updated),
            Err(err) => println!("update failed: {}", err),
        }
    }
}
