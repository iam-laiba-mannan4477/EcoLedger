resource "google_container_cluster" "primary" {
  name     = var.cluster_name
  location = var.zone

  network    = google_compute_network.vpc.self_link
  subnetwork = google_compute_subnetwork.subnet.self_link

  remove_default_node_pool = true
  initial_node_count       = 1

  workload_identity_config {
    workload_pool = "${var.project_id}.svc.id.goog"
  }

  ip_allocation_policy {}

  addons_config {
    http_load_balancing {
      disabled = false
    }
    horizontal_pod_autoscaling {
      disabled = false
    }
  }

  master_auth {
    client_certificate_config {
      issue_client_certificate = false
    }
  }

  binary_authorization {
    evaluation_mode = "PROJECT_SINGLETON_POLICY_ENFORCE"
  }

  private_cluster_config {
    enable_private_nodes     = true
    enable_private_endpoint  = false
    master_ipv4_cidr_block   = "172.16.0.0/28"

    # Enable intranode visibility (Fix for CKV_GCP_61)
    enable_intranode_visibility = true
  }

  network_policy {
    enabled  = true
    provider = "CALICO"
  }

  node_config {
    workload_metadata_config {
      mode = "GKE_METADATA"
    }

    shielded_instance_config {
      enable_secure_boot          = true
      enable_integrity_monitoring = true  # Fix for CKV_GCP_72
    }
  }

  google_groups_config {
    enabled = true  # Fix for CKV_GCP_65
  }

  master_authorized_networks_config {
    cidr_blocks {
      cidr_block   = "35.191.0.0/16"
      display_name = "gcp-health-checks"
    }
  }

  resource_labels = {
    environment = "production"
    owner       = "laiba"
  }

  release_channel {
    channel = "REGULAR"
  }

  deletion_protection = false
}
