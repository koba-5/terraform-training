resource "aws_sqs_queue" "sample" {
  name = "${var.env}-sqs-queue"
}