pipeline {
    agent any

    stages {
        stage('下载依赖') {
            steps {
                ./scripts/ci
            }
        }
        stage('代码检查') {
            steps {
                ./scripts/lint --fix
            }
        }
        stage('本地编译') {
            steps {
                ./scripts/bundle build
            }
        }
        stage('打包镜像') {
            steps {
                ./scripts/bundle image
            }
        }
    }
}
