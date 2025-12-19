resource "google_container_cluster" "primary" {
  name               = var.cluster_name
  location           = var.zone
  initial_node_count = 1  # Required but will use node pool for actual nodes

  network    = var.network_name
  subnetwork = var.subnet_name

  remove_default_node_pool = true
  initial_node_count       = 1

  private_cluster_config {
    enable_private_nodes        = true
    enable_private_endpoint     = false
    master_ipv4_cidr_block      = "172.16.0.0/28"
    enable_intranode_visibility = true   # <-- Added for CKV_GCP_61
  }

  ip_allocation_policy {
    use_ip_aliases = true
  }

  enable_vpc_flow_logs = true

  monitoring_service = "monitoring.googleapis.com/kubernetes"
  logging_service    = "logging.googleapis.com/kubernetes"

  node_config {
    machine_type = var.machine_type

    shielded_instance_config {
      enable_secure_boot           = true    # <-- For CKV_GCP_68 (Secure Boot)
      enable_integrity_monitoring  = true    # <-- Added for CKV_GCP_72 (Integrity Monitoring)
    }

    oauth_scopes = [
      "https://www.googleapis.com/auth/cloud-platform",
    ]
  }

  google_groups_config {
    security_group = "sabza-gke-admins@googlegroups.com"   # <-- For CKV_GCP_65 (RBAC with Google Groups)
  }

  release_channel {
    channel = "regular"
  }

  workload_identity_config {
    identity_namespace = "${var.project_id}.svc.id.goog"
  }

  logging_config {
    enable_components = ["SYSTEM_COMPONENTS", "WORKLOADS"]
  }

  monitoring_config {
    enable_components = ["SYSTEM_COMPONENTS", "WORKLOADS"]
  }

  lifecycle {
    ignore_changes = [
      node_config[0].oauth_scopes,  # Prevent diffs on oauth scopes
    ]
  }
}

resource "google_container_node_pool" "primary_nodes" {
  name       = var.node_pool_name
  location   = var.zone
  cluster    = google_container_cluster.primary.name
  node_count = var.node_count

  node_config {
    machine_type = var.machine_type

    shielded_instance_config {
      enable_secure_boot           = true
      enable_integrity_monitoring  = true
    }

    oauth_scopes = [
      "https://www.googleapis.com/auth/cloud-platform",
    ]
  }

  management {
    auto_upgrade = true
    auto_repair  = true
  }
}
