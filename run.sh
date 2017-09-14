#!/usr/bin/env bash

index=$(cat ./dist/index.html)

curl -X POST http://localhost:8001/apis/lms/plugins \
    --data "name=request-termination" \
    --data "config.status_code=503" \
    --data "config.body=$index" \
    --data "config.content_type=text/html charset=utf-8;"

curl -X POST http://localhost:8001/apis/studio/plugins \
    --data "name=request-termination" \
    --data "config.status_code=503" \
    --data "config.body=$index" \
    --data "config.content_type=text/html charset=utf-8;"

