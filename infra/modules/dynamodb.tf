resource "aws_dynamodb_table" "sample" {
  name           = "todo"
  billing_mode   = "PROVISIONED"
  read_capacity  = 20
  write_capacity = 20
  hash_key = "title"

  attribute {
    name = "title"
    type = "S"
  }
}