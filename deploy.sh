#!/bin/bash

#ENVIRONMENT VARIABLES MUST BE SET
if  [ -z "${$APPLICATION_ARTIFACT}" ]; then
    echo "Environment Variables not properly set, check your code"
else 
    echo "Compressing File..."
    tar -czf $APPLICATION_ARTIFACT -C $APPLICATION_BUILD_FOLDER .

    echo "Copying File to Cloud Environment..."
    scp -i $AUTH_PRIVATE_KEY ./$APPLICATION_ARTIFACT   $OCI_HOST:~/.

    echo "Extracting to the destination folder..."
    ssh -i $AUTH_PRIVATE_KEY $OCI_HOST "sudo tar zxf $APPLICATION_ARTIFACT -C $OCI_DEPLOYMENT_LOCATION"

    echo "Cleaning up..."
    ssh -i $AUTH_PRIVATE_KEY $OCI_HOST "rm $APPLICATION_ARTIFACT"

    rm $APPLICATION_ARTIFACT
    echo "Done"
fi

