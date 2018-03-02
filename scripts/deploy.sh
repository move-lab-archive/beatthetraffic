#!/bin/bash

# source .env variables
set -a
. ./.env
set +a

# docker login to AWS ECR
$(aws ecr get-login --no-include-email --region eu-west-1)

# cleanup docker unused images
docker image prune -a --force

# run build
docker build -t $REGISTRY/$REPOSITORY:latest . --file $DOCKERFILE_PATH

# push image to registry
docker push $REGISTRY/$REPOSITORY:latest

# Rollput image on instacne
ssh $INSTANCE "web-docker-automation/deploy.sh $REGISTRY/$REPOSITORY $DOCKERPORT"