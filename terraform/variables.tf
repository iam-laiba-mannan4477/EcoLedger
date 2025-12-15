variable "project_id" {
  type        = string
  description = "GCP project ID"
}

variable "region" {
  type    = string
  default = "asia-south1"
}

variable "zone" {
  type    = string
  default = "asia-south1-b"
}

variable "cluster_name" {
  type    = string
  default = "sabza-gke-cluster"
}

variable "network_name" {
  type    = string
  default = "sabza-vpc"
}

variable "subnet_name" {
  type    = string
  default = "sabza-subnet"
}

variable "node_count" {
  type    = number
  default = 3
}

variable "machine_type" {
  type    = string
  default = "e2-medium"
}

variable "node_pool_name" {
  type    = string
  default = "sabza-node-pool"
}