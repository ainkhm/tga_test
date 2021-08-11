# TGA web running on docker container

### development environment

Running container

```
docker-compose build

docker-compose up
```

Test URL: http://localhost:3000

### testing staging build

Build container for production environment

```
docker build -t tga-web-staging -f Dockerfile.staging /.
```

Running container for testing

```
docker run -p"3000:3000" tga-web-staging
```

Test URL: http://localhost:3000

### testing production build

Build container for production environment

```
docker build -t tga-web-pruduction /.
```

Running container for testing

```
docker run -p"3000:3000" tga-web-pruduction
```

Test URL: http://localhost:3000

### stopping containers

```
$ docker ps

CONTAINER ID        IMAGE               COMMAND                 CREATED             STATUS              PORTS                    NAMES
c95b19cf82b9        tga-web-pruduction              "yarn run start:prod"   16 seconds ago      Up 15 seconds       0.0.0.0:3000->3000/tcp   nifty_elion

$ docker stop c95b19cf82b9
```

### clean up

```
$ docker rmi tga-web-staging tga-web-pruduction
```

#### Learn more about React

[Server Side Rendering with React and Redux](https://www.udemy.com/share/100aViBUMeeFtTRHQ=/)

#### Learn more about Docker

[Docker and Kubernetes: The Complete Guide](https://www.udemy.com/share/100r9ABUMeeFtTRHQ=/)
