def imageName = "quay.io/halkeye/gavinmogan-dot-com";
node {
  def app;
  def commitHash;
  stage('Checkout') {
    /* Checkout the code we are currently running against */
    commitHash = checkout(scm).GIT_COMMIT
  }

  stage('Build') {
    /* Build the Docker image with a Dockerfile, tagging it with the build number */
    app = docker.build "${imageName}:${commitHash}"
  }

  stage('Publish') {
    /* Push the image to Docker Hub, using credentials we have setup separately on the worker node */
    withDockerRegistry([credentialsId: 'halkeye_quay', url: 'https://quay.io']) {
      app.push "${imageName}:${commitHash}"
      app.push 'latest'
    }
  }
}
