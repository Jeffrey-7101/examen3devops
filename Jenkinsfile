@Library('devops-library') _

pipeline {
    agent any

    stages {
        stage('Deploy') {
            steps {
                deployBackend()
            }
        }
    }
}