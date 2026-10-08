def call() {
    stage('Docker Build') {
        sh '''
            docker build -t jeffrey7101/devopsexamen3:latest .
        '''
    }

    stage('Docker Push') {
        withCredentials([
            usernamePassword(
                credentialsId: 'dockerhub',
                usernameVariable: 'DOCKER_USER',
                passwordVariable: 'DOCKER_TOKEN'
            )
        ]) {
            sh '''
                echo "$DOCKER_TOKEN" | docker login \
                  -u "$DOCKER_USER" \
                  --password-stdin

                docker push jeffrey7101/devopsexamen3:latest
            '''
        }
    }

    stage('Configurar Kubernetes') {
        withCredentials([
            string(
                credentialsId: 'digitalocean-token',
                variable: 'DO_TOKEN'
            )
        ]) {
            sh '''
                doctl auth init --access-token "$DO_TOKEN"
                doctl kubernetes cluster kubeconfig save devops-examen3
            '''
        }
    }

    stage('Deploy Kubernetes') {
        sh '''
            kubectl set image deployment/backend \
              backend=jeffrey7101/devopsexamen3:latest \
              -n node-dynamic

            kubectl rollout restart deployment/backend -n node-dynamic

            kubectl rollout status deployment/backend -n node-dynamic
        '''
    }
}