#!groovy

pipeline {

    agent any

    environment {
        CI               = true
        HOME             = '.'
    }

    stages {

        /*
        stage('Build container') {
            steps {
                sh 'docker build -t frontend .'
            }
        }

        stage('Build application') {
            steps {
                sh 'docker run -v /artifacts/tmp:/tmp/artifacts frontend'
            }
        }
        */

        stage('Deploy infrastructure') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'aws', usernameVariable: 'USER', passwordVariable: 'PASS')]) {
                    script {
                        sh """
                            cd terraform
                            terraform init -backend-config='access_key=$USER' -backend-config='secret_key=$PASS'
                            terraform apply -no-color -input=false -lock=false -var 'access_key=$USER' -var 'secret_key=$PASS'
                        """
                    }
                }
            }
        }

        /*
        stage('Deploy application') {
        }
        */

    }

}

// vim:st=4:sts=4:sw=4:expandtab
