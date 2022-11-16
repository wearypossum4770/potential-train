use crate::AppState;
use serde::{Deserialize, Serialize};
#[derive(Debug, Default, Deserialize, Serialize)]
pub struct Analytics {
    pub source: String,
    pub first_name: String,
    pub last_name: String,
    pub email: String,
    pub age: u8,
}

impl Analytics {
    pub fn new() -> Analytics {
        Analytics {
            ..Default::default()
        }
    }
    pub fn create_table(conn: &AppState) {
        conn.create_table("identity()");
    }
}
