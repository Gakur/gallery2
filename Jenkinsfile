pipeline {
    agent any
    environment {

        EMAIL_BODY = 

        """

            <p>EXECUTED: Job <b>\'${env.JOB_NAME}:${env.BUILD_NUMBER})\'</b></p>

            <p>

            View console output at 

            "<a href="${env.BUILD_URL}">${env.JOB_NAME}:${env.BUILD_NUMBER}</a>"

            </p> 

            <p><i>(Build log is attached.)</i></p>

        """

        EMAIL_SUBJECT_SUCCESS = "Status: 'SUCCESS' -Job \'${env.JOB_NAME}:${env.BUILD_NUMBER}\'" 

        EMAIL_SUBJECT_FAILURE = "Status: 'FAILURE' -Job \'${env.JOB_NAME}:${env.BUILD_NUMBER}\'"
        
        EMAIL_SUBJECT_ALWAYS = "Status: 'ALWAYS' -Job \'${env.JOB_NAME}:${env.BUILD_NUMBER}\'"

        EMAIL_RECEPIENT = 'wahithepeter@gmail.com'

    }
    tools {
        nodejs "node"
    }
    stages {
        stage('clone repository') {
            steps {
                git 'https://github.com/Gakur/gallery2.git'
            }
        }
        stage('Build the project') {
            steps {
                nodejs('node') {
                    sh 'npm install'
                }
            }
        }
        stage('Deploy to Heroku') {
            steps {
                withCredentials([usernameColonPassword(credentialsId: 'heroku', variable: 'HEROKU_CREDENTIALS')]){
                    sh 'git push https://${HEROKU_CREDENTIALS}@git.heroku.com/ip1dev.git master'
                }
            }
        }
        stage('Tests') {
            steps {
                sh 'npm test'
            }
        }
    }
    post {
        success {
            emailext attachLog: true, 
                body: EMAIL_BODY, 

                subject: EMAIL_SUBJECT_SUCCESS,

                to: EMAIL_RECEPIENT
        }

        failure {
            emailext attachLog: true, 
                body: EMAIL_BODY, 

                subject: EMAIL_SUBJECT_FAILURE, 

                to: EMAIL_RECEPIENT
        }
    }
}