#!/bin/bash

# ID=121 TOKEN="BAhJIiVmNjFlMjAyNzY1MTlhZDNlMzBkMjNkZmEwM2ZmYmJkNgY6BkVG--62898123374a58c7ce2c77fc06da152fc3bc62a3" sh scripts/sign-out.sh

# ID=2 sh scripts/sign-out.sh

# API="${API_ORIGIN:-http://httpbin.org}"
# URL_PATH="/delete?id=$ID"
API="${API_ORIGIN:-http://tic-tac-toe.wdibos.com}"
URL_PATH="/sign-out/$ID"

curl "${API}${URL_PATH}" \
  --include \
  --request DELETE \
  --header "Authorization: Token token=$TOKEN"
  --header "Content-Type: application/json" \
echo
