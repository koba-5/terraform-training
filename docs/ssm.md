# Systems Manager

## コマンド

###　パラメータ登録

```
awslocal ssm put-parameter --name 'sample' --value 'sample_value' --type 'String'
```

###　パラメータを確認

```
awslocal ssm get-parameter --name 'local-sample'
```
