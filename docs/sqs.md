# Amazon SQS（Simple Queue Service）

## コマンド

### キュー一覧を確認

```
awslocal sqs list-queues
```

### メッセージの送信

```
awslocal sqs send-message \
  --queue-url 'http://sqs.ap-northeast-1.localhost.localstack.cloud:4566/000000000000/sqs-queue' \
  --message-body '{"message": "This is a sample message."}'
```

### メッセージ数を確認

```
awslocal sqs get-queue-attributes \
  --queue-url 'http://sqs.ap-northeast-1.localhost.localstack.cloud:4566/000000000000/sqs-queue' \
  --attribute-names 'ApproximateNumberOfMessages'
```

### メッセージ受信

```
awslocal sqs receive-message \
  --queue-url 'http://sqs.ap-northeast-1.localhost.localstack.cloud:4566/000000000000/sqs-queue'
```
