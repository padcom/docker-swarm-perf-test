# Docker Swarm vs Node.js cluster performance test

## Steps to run the test

1. Install nvm
2. Using nvm install node 17.4.0
3. Install Docker
4. Install Docker Compose 2.0
5. Create Docker registry

```
$ docker service create --name registry --publish published=5000,target=5000 registry:2
```

6. Build the application's container

```
$ docker compose build
```

7. Publish application container image

```
$ docker compose push
```

8. Initialize Docker Swarm

```
$ docker swarm init --advertise-addr <your-ip-goes-here>
```

9. Deploy the stack to Docker Swarm

```
$ docker stack deploy --compose-file docker-compose.yml demo
```

10. Scale the application

```
$ docker service scale demo_web=16

```
