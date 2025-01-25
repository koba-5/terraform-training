# Simple Email Service

## コマンド

### 検証済みメールを確認

```
awslocal ses list-identities
```

### メールを有効化

```
awslocal ses verify-email-identity \
  --email-address sender@example.com
```

### メールを送信

```
awslocal ses send-email \
  --region ap-northeast-1 \
  --from sender@example.com \
  --to recipient@example.example.com \
  --cc xxx@example.example.com \
  --subject 'cc only test mail' \
  --text 'test message.' \
  --configuration-set-name 'sample_email'
```
