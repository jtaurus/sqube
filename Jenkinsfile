node {
  stage('Preparation') {
    git 'https://github.com/jtaurus/sqube.git'
  }
  stage('Hello') {
   sh 'echo Hello Pipeline!'
  }
  stage('Install dependencies') {
    dir("app") {
    env.NODEJS_HOME = "${tool 'Node 6.x'}"
    
    // on linux / mac
    env.PATH="${env.NODEJS_HOME}/bin:${env.PATH}"

    sh 'npm --version'
    }
  }
}
