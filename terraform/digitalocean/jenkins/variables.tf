variable "digitalocean_token" {
  description = "Token de DigitalOcean"
  type        = string
  sensitive   = true
}

variable "region" {
  description = "Region del servidor Jenkins"
  type        = string
  default     = "tor1"
}