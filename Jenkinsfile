pipeline {
  agent {
    node {
      label 'stage'
    }

  }
  stages {
    stage('build') {
      steps {
        sh 'npm install'
      }
    }
  }
}