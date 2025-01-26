resource "aws_api_gateway_rest_api" "sample" {
  body = jsonencode({
    openapi = "3.0.1"
    info = {
      title   = "sample"
      version = "1.0"
    }
    paths = {
      "/hello" = {
        get = {
          responses = {
            "200" = {
              description = "200 response"
              content = {
                "application/json" = {
                  sample = jsonencode({
                    message = "Hello World"
                  })
                }
              }
            }
          }
          x-amazon-apigateway-integration = {
            type          = "mock"
            httpMethod    = "GET"
            responses = {
              default = {
                statusCode = "200"
                responseTemplates = {
                  "application/json" = "{\"message\": \"Hello World\"}"
                }
              }
            }
            requestTemplates = {
              "application/json" = "{\"statusCode\": 200}"
            }
          }
        }
      }
    }
  })

  name = "sample"
}

resource "aws_api_gateway_deployment" "sample" {
  rest_api_id = aws_api_gateway_rest_api.sample.id

  triggers = {
    redeployment = sha1(jsonencode(aws_api_gateway_rest_api.sample.body))
  }

  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_api_gateway_stage" "dev" {
  deployment_id = aws_api_gateway_deployment.sample.id
  rest_api_id   = aws_api_gateway_rest_api.sample.id
  stage_name    = var.env
}