#!/bin/bash

BUILD=$1

if [ -z $BUILD ] 
then
    BUILD='production'
fi
echo "Building $BUILD"

NODE_ENV=$BUILD webpack
