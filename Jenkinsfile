#!groovy

pipeline {

    agent any

    environment {
        CI                    = true
        HOME                  = '.'
        AWS_ID                = credentials("aws")
        AWS_ACCESS_KEY_ID     = "${env.AWS_ID_USR}"
        AWS_SECRET_ACCESS_KEY = "${env.AWS_ID_PSW}"
        AWS_DEFAULT_REGION    = "us-east-1"
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
                sh """
                    cd terraform
                    terraform init -input=false 
                    terraform apply -no-color -input=false -auto-approve -lock=false
                """
            }
        }

        /*
        stage('Deploy application') {
            steps {
                withAWS(region:'us-east-1', credentials:'aws') {
                    s3Upload(file: 'build', bucket: "coffee-prod")
                }
            }
        }
        */
    }

}

// vim:st=4:sts=4:sw=4:expandtab
