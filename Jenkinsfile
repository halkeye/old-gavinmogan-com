def imageName = "quay.io/halkeye/gavinmogan-dot-com";
node {
  def app
  def commitHash
  def branchName
  stage('Checkout') {
    /* Checkout the code we are currently running against */
    def scmVars = checkout(scm)
    commitHash = scmVars.GIT_COMMIT.take(6)
    branchName = scmVars.GIT_BRANCH
  }

  stage('Build') {
    /* Build the Docker image with a Dockerfile, tagging it with the build number */
    app = docker.build "${imageName}:${commitHash}"
  }

  if (branchName == "master") {
    stage('Publish') {

      /* Push the image to Docker Hub, using credentials we have setup separately on the worker node */
      withDockerRegistry([credentialsId: 'halkeye-quay', url: 'https://quay.io']) {
        app.push commitHash
        app.push 'latest'
      }
    }
  }
}
