def imageName = "ribbitfrog.kodekoan.com:5000/gavinmogan-dot-com:${env.BUILD_NUMBER}";
node {
    stage 'Checkout'
    /* Checkout the code we are currently running against */
    git 'https://github.com/halkeye/gavinmogan.com.git'

    stage 'Build'
    /* Build the Docker image with a Dockerfile, tagging it with the build number */
    def app = docker.build imageName

    stage 'Publish'
    /* Push the image to Docker Hub, using credentials we have setup separately on the worker node */
    withDockerRegistry([url: 'ribbitfrog.kodekoan.com:5000']) {
        app.push 'latest'
    }
}
node('production') {
    sh 'docker pull ribbitfrog.kodekoan.com:5000/gavinmogan-dot-com'
    sh 'docker stop gavinmogan-dot-com || true'
    sh 'docker rm gavinmogan-dot-com || true'
    sh 'docker run -d -p 3000:3000 --restart=always --name gavinmogan-dot-com ribbitfrog.kodekoan.com:5000/gavinmogan-dot-com'
}
