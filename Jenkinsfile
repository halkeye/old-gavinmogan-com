def imageName = "quay.io/halkeye/gavinmogan-dot-com";
node('docker-dind-slave') {
  def app;
  stage('Checkout') {
    /* Checkout the code we are currently running against */
    checkout scm
  }

  stage('Build') {
    /* Build the Docker image with a Dockerfile, tagging it with the build number */
    app = docker.build "${imageName}:${env.BUILD_NUMBER}"
  }

  stage('Publish') {
    /* Push the image to Docker Hub, using credentials we have setup separately on the worker node */
    withDockerRegistry([credentialsId: 'halkeye_quay', url: 'https://quay.io']) {
      app.push 'latest'
    }
  }
}
