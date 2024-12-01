# aws-sandbox

## リポジトリの説明

このリポジトリは、terraform のキャッチアップを行う為のもの。\
LocalStack によりローカル環境に AWS のモックを立てて、そこで Terraform を触ってみることとします。

## LocalStack 起動方法

1\. localstack を起動

```
docker compose up localstack -d
```

2\. localstack が起動されていることを確認する

```
docker ps
```
