#!/usr/bin/env bash

echo "Installing Dependencies"
npm install

echo "Creating baroque container"
docker-compose build baroque

echo "Running baroque container"
docker-compose up -d baroque
