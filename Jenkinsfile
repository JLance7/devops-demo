pipeline {
  agent {
    docker { image: 'python:3.10.7-alpine' } 
  }
  
  stages {
    stage("frontend"){
      steps {
        echo "frontend"
        sh 'python --version'
      }
    }
    
    stage ("backend"){
      steps {
        echo "backend"
      }
    }
  }
}
