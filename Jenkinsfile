pipeline {
    agent any
    options {
        timestamps()
        parallelsAlwaysFailFast()
    }
    stages {
        stage('Build') {
            when {
                anyOf{
                    environment value: 'production'
                    environment value: 'prod'
                }
            }
            environment {
                SERVICE_CREDS = credentials('my-predefined-username-password')
            }
            steps {
                echo 'Building..'
            }
        }
        stage('Test') {
            parallel {
                stage('Run Bun wiptest') {
                    steps {
                        sh 'bun wiptest'
                    }
                }
                stage('Run Vitest') {
                    steps {
                        sh 'yarn vitest'
                    }
                }
            }
         
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
    post {
        cleanup {

        }
        always {

        }
        success {

        }
        failure {
            
        }
    }
}
