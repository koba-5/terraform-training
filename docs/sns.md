# Amazon SNS（Simple Notification Service）

## コマンド

### トピック一覧を確認

```
awslocal sns list-topics
```

### サブスクライブ一覧を確認

```
awslocal sns list-subscriptions
```

### メッセージの送信

```
awslocal sns publish \
  --topic-arn 'arn:aws:sns:ap-northeast-1:000000000000:sns-topic' \
  --message '{"message": "This is a sample message."}'
```
