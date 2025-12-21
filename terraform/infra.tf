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
    ip_cidr_range = "10.10.16.0/20"
  }

  secondary_ip_range {
    range_name    = var.secondary_range_services
    ip_cidr_range = "10.10.32.0/24"
  }

  log_config {
    aggregation_interval = "INTERVAL_5_SEC"
    flow_sampling        = 0.5
    metadata             = "INCLUDE_ALL_METADATA"
  }
}

resource "google_compute_firewall" "allow_http_https" {
  name    = "allow-http-https"
  network = google_compute_network.vpc.name

  direction = "INGRESS"

  allow {
    protocol = "tcp"
    ports    = ["80", "443"]
  }

  source_ranges = [
    "35.191.0.0/16",
    "130.211.0.0/22"
  ]
}

