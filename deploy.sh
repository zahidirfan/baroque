#!/usr/bin/env bash

echo "Creating baroque container"
docker-compose build baroque

echo "Running baroque container"
docker-compose up -d baroque
