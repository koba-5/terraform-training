resource "aws_sns_topic" "sample" {
  name = "${var.env}-sns-topic"
}

resource "aws_sns_topic" "next_to_sqs" {
  name = "${var.env}-next-to-sqs"
}

resource "aws_sns_topic_subscription" "sample" {
  topic_arn = aws_sns_topic.next_to_sqs.arn
  protocol  = "sqs"
  endpoint  = aws_sqs_queue.sample.arn
}