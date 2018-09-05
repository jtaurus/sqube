node {
  stage('Preparation') {
    git 'https://github.com/jtaurus/sqube.git'
  }
  stage('Hello') {
   sh 'echo Hello Pipeline!'
  }
  stage('Install dependencies') {
    dir("app") {
      sh 'npm install'
    }
  }
}
