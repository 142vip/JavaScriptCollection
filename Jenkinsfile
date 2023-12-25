pipeline {
    agent any

    stages {
        stage('下载依赖') {
            steps {
                ls -l &&
                bash ./scripts/ci
            }
        }
        stage('代码检查') {
            steps {
               bash ./scripts/lint --fix
            }
        }
        stage('本地编译') {
            steps {
                bash ./scripts/bundle build
            }
        }
        stage('打包镜像') {
            steps {
                bash ./scripts/bundle image
            }
        }
    }
}
