pipeline {
  agent any
  
  stages {
    stage("frontend"){
      steps {
        echo "frontend"
        node('NodeJS 19.7.0'){
          sh "yarn install" 
        }
      }
    }
    
    stage ("backend"){
      steps {
        echo "backend"
      }
    }
  }
}
