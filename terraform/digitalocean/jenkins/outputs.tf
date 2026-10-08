output "jenkins_ip" {
  description = "IP publica del servidor Jenkins"
  value       = digitalocean_droplet.jenkins.ipv4_address
}

output "jenkins_name" {
  value = digitalocean_droplet.jenkins.name
}