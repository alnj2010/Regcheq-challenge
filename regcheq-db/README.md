# Regcheq Challenge

### Installation

If you want to set the mongodb and import the users to start with the challenge, use this command:

```sh
$ make database-up
```

If you only want to run the mongodb image, use this one:

```sh
$ make database-docker-up
```

If you only want to import the users in the running mongodb image, use this:

```sh
$ make database-provision
```

### Something went wrong?

If something went wrong, you can stop and remove the container with this:

```sh
$ make database-down
```

If you want to reset the container:

```sh
$ make database-reset
```

Anything else?, you are always welcome to have a look at the Makefile ;)
