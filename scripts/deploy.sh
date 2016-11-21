#!/bin/bash

ORIGIN_URL=`git config --get remote.origin.url`
ORIGIN_URL_WITH_CREDENTIALS=${ORIGIN_URL/\/\/github.com/\/\/$GITHUB_TOKEN@github.com}

npm run build-storybook
cd .out
git init
git config user.name "yongdamsh"
git config user.email "yongdamsh@gmail.com"
git add .
git commit -m "Deploy Storybook to GitHub Pages"
git push --force --quiet "$ORIGIN_URL_WITH_CREDENTIALS" master:gh-pages
cd ..
rm -rf .out

echo "Deployed successfully"
exit 0
