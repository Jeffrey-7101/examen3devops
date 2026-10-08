output "cluster_name" {
  value = digitalocean_kubernetes_cluster.examen.name
}

output "cluster_id" {
  value = digitalocean_kubernetes_cluster.examen.id
}

output "endpoint" {
  value = digitalocean_kubernetes_cluster.examen.endpoint
}