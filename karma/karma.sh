#!/bin/bash

if [ -d "/home/coder/project/workspace/angularapp" ]
then
    echo "project folder present"
    cp /home/coder/project/workspace/karma/karma.conf.js /home/coder/project/workspace/angularapp/karma.conf.js;
    
    # checking for app component
    if [ -d "/home/coder/project/workspace/angularapp/src/app" ]
    then
        cp /home/coder/project/workspace/karma/app.component.spec.ts /home/coder/project/workspace/angularapp/src/app/app.component.spec.ts;
    else
        echo "FE_AppTest FAILED";
    fi

    # checking for auth component
    if [ -d "/home/coder/project/workspace/angularapp/src/app/auth" ]
    then
        cp /home/coder/project/workspace/karma/app.component.spec.ts /home/coder/project/workspace/angularapp/src/app/auth/auth.component.spec.ts;
    else
        echo "FE_AuthTest FAILED";
    fi

    # checking for login component
    if [ -d "/home/coder/project/workspace/angularapp/src/app/auth/login" ]
    then
        cp /home/coder/project/workspace/karma/login.component.spec.ts /home/coder/project/workspace/angularapp/src/app/auth/login/login.component.spec.ts;
    else
        echo "FE_LoginTest FAILED";
    fi 

    #checking for signup component
    if [ -d "/home/coder/project/workspace/angularapp/src/app/auth/signup" ]
    then
        cp /home/coder/project/workspace/karma/signup.component.spec.ts /home/coder/project/workspace/angularapp/src/app/auth/signup/signup.component.spec.ts;
    else
        echo "FE_SignupTest FAILED";
    fi 
    
    #checking for admin component
    if [ -d "/home/coder/project/workspace/angularapp/src/app/admin" ]
    then
        cp /home/coder/project/workspace/karma/admin.component.spec.ts /home/coder/project/workspace/angularapp/src/app/admin/admin.component.spec.ts;
    else
        echo "FE_AdminTest FAILED";
    fi 

    cd /home/coder/project/workspace/angularapp/;
    npm test;
else   
    echo "FE_AppTest FAILED";
    echo "FE_AuthTest FAILED";
    echo "FE_LoginTest FAILED";
    echo "FE_SignupTest FAILED";
    echo "FE_AdminTest FAILED";
fi
