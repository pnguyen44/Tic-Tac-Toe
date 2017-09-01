#!/bin/bash


# {"user":{"id":121,"email":"fin","token":"BAhJIiVhOTNmMTdhM2EzODgwMTUyYzM1M2E0NmRlMTRjOTRhYQY6BkVG--075ac7eac72a0d4edf9144414153c257d79f28f0"}}
# ~/wdi/trainings/api-token-auth (training)

# ID=121 OLD_PASSWORD='fin1' NEW_PASSWORD='fin2' TOKEN='BAhJIiVhOTNmMTdhM2EzODgwMTUyYzM1M2E0NmRlMTRjOTRhYQY6BkVG--075ac7eac72a0d4edf9144414153c257d79f28f0' sh scripts/change-password-json.sh

# API="${API_ORIGIN:-http://httpbin.org}"
# URL_PATH="/patch?id=${ID}"
API="${API_ORIGIN:-https://ga-library-api.herokuapp.com}"
URL_PATH="/change-password/${ID}"

curl "${API}${URL_PATH}" \
  --include \
  --request PATCH \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
    "passwords": {
      "old": "'"${OLD_PASSWORD}"'",
      "new": "'"${NEW_PASSWORD}"'"
    }
  }'
# OLD_PASSWORD='fin1' NEW_PASSWORD='fin2' TOKEN='BAhJIiU2M2EwMWUxYjJkNzkyOThlYmM1M2ZlNmUwOWJhNTU4NAY6BkVG--f41fe83a95ead3bb18448894a33c3293c1652b86'
echo
