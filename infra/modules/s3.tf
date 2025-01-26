resource "aws_s3_bucket" "sample" {
  bucket = "${var.env}-s3-bucket"
}

resource "aws_s3_bucket_notification" "sample" {
  bucket = aws_s3_bucket.sample.bucket
  topic {
    topic_arn = aws_sns_topic.sample.arn
    events    = ["s3:ObjectCreated:*"]
  }
}