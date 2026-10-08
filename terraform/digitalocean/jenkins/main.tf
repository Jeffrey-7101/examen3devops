resource "digitalocean_droplet" "jenkins" {
  name   = "jenkins-examen3"
  region = var.region
  size   = "s-2vcpu-4gb"
  image  = "ubuntu-24-04-x64"

  user_data = <<-EOF
    #!/bin/bash

    apt-get update
    apt-get install -y ca-certificates curl

    curl -fsSL https://get.docker.com | sh

    systemctl enable docker
    systemctl start docker

    apt-get install -y docker-compose-plugin
  EOF
}