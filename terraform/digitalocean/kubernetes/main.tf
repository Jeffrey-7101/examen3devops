resource "digitalocean_kubernetes_cluster" "examen" {
  name    = "devops-examen3"
  region  = var.region
  version = "latest"
  ha      = false

  node_pool {
    name       = "worker-pool"
    size       = "s-2vcpu-4gb"
    node_count = 1
  }
}