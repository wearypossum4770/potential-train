mod address;
mod analytics;
mod core;

use crate::core::AppState;

use actix_web::{get, web, App, HttpRequest, HttpServer, Responder};

#[get("/")]
async fn index(_req: HttpRequest) -> impl Responder {
    "Hello from the index page."
}

async fn hello(path: web::Path<String>) -> impl Responder {
    format!("Hello {}!", &path)
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    let location = "127.0.0.1:8080";
    let database: AppState = AppState::connect();
    database.create_table("analytics (name varchar(500))");
    println!("{}", database.connection.is_autocommit());
    println!("Sqlite3 version: {}", database.sqlite_version);
    println!("Actix Web server started at http://{}/", location);
    HttpServer::new(|| {
        App::new()
            .service(index)
            .route("/{name}", web::get().to(hello))
    })
    .bind(location)?
    .run()
    .await
}
