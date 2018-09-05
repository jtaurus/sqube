node {
  stage('Preparation') {
    git 'https://github.com/jtaurus/sqube.git'
  }
  stage('Hello') {
   sh 'echo Hello Pipeline!'
  }
  stage('Install dependencies') {
    dir("app") {
      env.NODEJS_HOME = "${tool 'node-10'}"
    
      // on linux / mac
      env.PATH="${env.NODEJS_HOME}/bin:${env.PATH}"

      sh 'npm install'
    }
  }
  stage('SonarQube analysis') {
    def scannerHome = tool 'sonarscanner-1';
    
    withSonarQubeEnv('sonar-server-localhost') {
      dir("app") {
        sh "${scannerHome}/bin/sonar-scanner -Dsonar.projectKey=express-app -Dsonar.sources=."
      }
    }
  }
}
