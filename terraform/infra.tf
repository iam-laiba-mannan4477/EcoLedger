resource "google_compute_network" "vpc" {
  name                    = var.network_name
  auto_create_subnetworks = false
}

resource "google_compute_subnetwork" "subnet" {
  name          = var.subnet_name
  ip_cidr_range = "10.10.0.0/20"
  network       = google_compute_network.vpc.id
  region        = var.region

  private_ip_google_access = true

  secondary_ip_range {
    range_name    = var.secondary_range_pods
    ip_cidr_range = "10.10.16.0/20"  # Pods CIDR range
  }

  secondary_ip_range {
    range_name    = var.secondary_range_services
    ip_cidr_range = "10.10.32.0/24"  # Services CIDR range
  }

  log_config {
    aggregation_interval = "INTERVAL_5_SEC"
    flow_sampling        = 0.5
    metadata             = "INCLUDE_ALL_METADATA"
  }
}

