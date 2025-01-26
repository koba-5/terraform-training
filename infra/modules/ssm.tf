resource "aws_ssm_parameter" "rest_api_id" {
  name = "${var.env}-rest-api-id"
  type = "String"
  value = aws_api_gateway_rest_api.sample.id
}

resource "aws_ssm_parameter" "queue_url" {
  name = "${var.env}-queue-url"
  type = "String"
  value = aws_sqs_queue.sample.url
}

resource "aws_ssm_parameter" "sns_topic_arn" {
  name = "${var.env}-sns-topic-arn"
  type = "String"
  value = aws_sns_topic.sample.arn
}

resource "aws_ssm_parameter" "next_to_sqs_sns_topic_arn" {
  name = "${var.env}-next-to-sqs-sns-topic-arn"
  type = "String"
  value = aws_sns_topic.next_to_sqs.arn
}