terraform {
  backend "gcs" {
    bucket  = "sabza-terraform-state"
    prefix  = "network/state"
  }
}
