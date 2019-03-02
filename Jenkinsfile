#!groovy

pipeline {

    agent any

    environment {
        CI               = true
        HOME             = '.'
    }

    stages {

        stage('Build container') {
            steps {
                sh 'docker build -t frontend .'
            }
        }

        stage('Build application') {
            steps {
                sh 'docker run -v /artifacts:/tmp frontend'
            }
        }

        /*
        stage('Deploy infrastructure') {
        }

        stage('Deploy application') {
        }
        */

    }

}

// vim:st=4:sts=4:sw=4:expandtab
