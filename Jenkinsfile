pipeline {
    agent {
        docker {
            image 'node:10-alpine'
            args '-p 3010:3010'
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh './jenkins/scripts/test.sh'
            }
        }
        stage('Deliver') {
            steps {
                sh './jenkins/scripts/deliver.sh'
                input message: 'El proyecto final de sistemas operativos 2 se cargo correctamente (Presione click en "Proceed" para continuar)?'
                sh './jenkins/scripts/kill.sh'
            }
        }
    }
}
