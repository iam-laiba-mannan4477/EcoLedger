resource "google_container_cluster" "primary" {
  name     = var.cluster_name
  location = var.region

  networking_mode = "VPC_NATIVE"

  network    = google_compute_network.vpc.id
  subnetwork = google_compute_subnetwork.subnet.id

  remove_default_node_pool = true

  ip_allocation_policy {
    cluster_secondary_range_name  = var.secondary_range_pods
    services_secondary_range_name = var.secondary_range_services
    use_ip_aliases               = true
  }

  node_config {
    machine_type = var.machine_type
    oauth_scopes = [
      "https://www.googleapis.com/auth/cloud-platform",
    ]
  }

  node_pool {
    name       = var.node_pool_name
    node_count = var.node_count

    node_config {
      machine_type = var.machine_type
      oauth_scopes = [
        "https://www.googleapis.com/auth/cloud-platform",
      ]
    }
  }
}

