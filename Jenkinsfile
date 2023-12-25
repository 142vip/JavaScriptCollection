pipeline {
    agent any

    stages {
        stage('下载依赖') {
            steps {
                sh './scripts/ci'
            }
        }
        stage('代码检查') {
            steps {
               sh './scripts/lint --fix'
            }
        }
        stage('本地编译') {
            steps {
                sh './scripts/bundle build'
            }
        }
        stage('打包镜像') {
            steps {
                sh './scripts/bundle image'
            }
        }
    }
}
