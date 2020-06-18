pipeline {
  environment {
    registry = "sureshtripini/quote_ui"
    registryCredential = 'DOCKER_HUB'
    dockerImage = ''
  }
  agent any
 
 stages {
   
    stage('Build Image') {
      steps{
        script {
          dockerImage = docker.build registry + ":$BUILD_NUMBER"
        }
      }
    }
	
    stage('Push Image') {
      steps{
        script {
            docker.withRegistry( '', registryCredential ) {
            dockerImage.push()
          }
        }
      }
    }
    
    
    stage('Remove Image') {
      steps{
        sh "docker rmi $registry:$BUILD_NUMBER"
      }
    }
	 
    stage('Run Container') {
      steps{
        sh "docker run -itd -p 3000:80 $registry:$BUILD_NUMBER"
      }
    }
    
    stage('Cleanup') {
      steps{
        cleanWs()
      }
    }
    
  }
}
