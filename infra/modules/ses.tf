resource "aws_ses_email_identity" "sample" {
  email = "sender@example.com"
}

resource "aws_ses_configuration_set" "sample" {
  name = "${var.env}/sample_email"
}