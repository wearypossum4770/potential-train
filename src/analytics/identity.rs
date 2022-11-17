#[derive(Debug)]
pub enum EnvironmentName {
    Production,
    PreProduction,
    Staging,
    Development,
    Local,
    Integration,
    Acceptance,

}

#[derive(Debug, Default)]
pub struct Environment {
 pub name: Box<Environment>,
}

#[derive(Debug, Default)]
pub struct Identity {
    
}

impl Environment {
    pub fn set_name(&mut self) -> &mut Environment {
        
        self
    }
}