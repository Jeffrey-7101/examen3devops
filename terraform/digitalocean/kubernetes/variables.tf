variable "digitalocean_token" {
  description = "Token de DigitalOcean"
  type        = string
  sensitive   = true
}

variable "region" {
  description = "Región del cluster"
  type        = string
  default     = "tor1"
}