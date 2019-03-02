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

        stage('Download utilities') {
            steps {
                sh """
                    aws s3 cp s3://coffee_artifacts/source_has_changed /usr/local/bin
                    aws s3 cp s3://coffee_artifacts/update_source_cksum /usr/local/bin
                """
            }
        }

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

        stage('Deploy infrastructure') {
            steps {
                sh """
                    cd terraform
                    terraform init -input=false 
                    terraform apply -no-color -input=false -auto-approve -lock=false
                """
            }
        }
        */

        stage('Deploy application') {
            steps {
                /*
                sh """
                    set +e; cmp --silent /artifacts/tmp/coffee.zip /artifacts/coffee.zip ; ret=\$? ; set -e
                    if [ ! -f /artifacts/coffee.zip ] || [ \$ret -ne 0 ]; then
                        cp /artifacts/tmp/coffee.zip /artifacts/coffee.zip
                        mkdir -p /tmp/upload_s3
                        rm -rf /tmp/upload_s3
                        unzip /artifacts/coffee.zip -d /tmp/upload_s3
                        #aws s3 cp /tmp/upload_s3/ s3://coffee-prod/ --recursive
                        aws s3 sync /tmp/upload_s3/ s3://coffee-prod/ --acl public-read
                    else
                        echo Not deployed, same code as previous deploy.
                    fi
                """
                */
            }
        }
    }

}

// vim:st=4:sts=4:sw=4:expandtab
