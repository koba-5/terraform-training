resource "aws_route53_zone" "sample" {
  name = "example.com"
}

resource "aws_route53_record" "sample" {
  zone_id = aws_route53_zone.sample.zone_id
  name    = "${var.env}.${aws_route53_zone.sample.name}"
  type    = "NS"
  ttl     = "30"
  records = aws_route53_zone.sample.name_servers
}