pipeline {
    agent any
    tools {nodejs "Node18.18.1"}
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
        stage('镜像打包并推送') {
            steps {
                sh './scripts/bundle image_faster'
            }
        }
    }
}
