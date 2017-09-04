#!/bin/bash

# sh scripts/sign-in-json.sh

# API="${API_ORIGIN:-http://httpbin.org}"
# URL_PATH="/post"
API="${API_ORIGIN:-http://tic-tac-toe.wdibos.com}"
URL_PATH="/sign-in"

EMAIL="t3"
PASSWORD="t3"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'"
    }
}'

# {"user":{"id":546,"email":"blue","token":"BAhJIiU4YWU5ZDY1NDU3OTkyMGNhZThiZWY1OTU0Yzg3MTIwMAY6BkVG--6df0c908738b1082e052d551149fdb0178cc3e66"}}
# EMAIL="blue" PASSWORD="blue" sh scripts/sign-in-json.sh
echo
