#!groovy

pipeline {

    agent any

    environment {
        CI                    = true
        HOME                  = '.'
        AWS_ID                = credentials("aws")
        AWS_ACCESS_KEY_ID     = "${env.AWS_ID_USR}"
        AWS_SECRET_ACCESS_KEY = "${env.AWS_ID_PSW}"
        AWS_REGION            = "us-east-1"
    }

    stages {

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

        stage('Deploy infrastructure') {
            steps {
                sh """
                    cd terraform
                    terraform init -input=false 
                    terraform apply -no-color -input=false -auto-approve -lock=false
                    terraform output distribution_id > ../distribution_id.txt
                    cat ../distribution_id.txt
                """
            }
        }

        stage('Deploy application to S3') {
            steps {
                sh """
                    rm -rf /tmp/upload_s3
                    mkdir -p /tmp/upload_s3
                    unzip /artifacts/tmp/coffee.zip -d /tmp/upload_s3
                    aws s3 sync /tmp/upload_s3/ s3://coffee-prod/ --acl public-read
                    #/tmp/bin/update_source_cksum frontend coffee/src/
                """
            }
        }

        stage('Create invalidation in CloudFront') {
            steps {
                sh 'aws cloudfront create-invalidation --distribution-id $(<distribution_id.txt) --paths "/*"'
            }
        }
    }

}

// vim:st=4:sts=4:sw=4:expandtab
