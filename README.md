## Miuum
*a basic Medium clone*

### Techs 🚀
  - *NodeJS*
  - *React*
  - *Express*
  - *MySQL*
  
### Start App On Locally

First, for client folder and app do:

```bash
yarn install
```

Client app on do:

```bash
yarn build
```

Finally, start express app:

```bash
yarn start
```
  
### Docker
First build docker image like this do:

```bash
docker build -t <name>/miuum .
```

And run:

```bash
docker run -p 49160:8080 -d <name>/miuum
```

[for more information](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)
