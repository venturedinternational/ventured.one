#!/bin/bash

if [ ${TRAVIS_BRANCH} == master ];
then
  echo "Clearing bucket: s3://ventured.one"
  aws s3 rm s3://ventured.one --recursive --region us-east-2
elif [ ${TRAVIS_BRANCH} == develop ];
then
  echo "Clearing bucket: s3://develop.ventured.one"
  aws s3 rm s3://develop.ventured.one --recursive --region us-east-2
fi
