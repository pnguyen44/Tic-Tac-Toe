API="${API_ORIGIN:-http://tic-tac-toe.wdibos.com}"
URL_PATH="/games/${ID}"

curl "${API}${URL_PATH}" \
  --include \
  --request PATCH \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
      "game": {
        "cell": {
          "index": "'"${INDEX}"'",
          "value": "'"${VALUE}"'"
      },
      "over": "'"${OVER}"'"
    }'
# ID=568 TOKEN="BAhJIiVmZDlmMzYzYjlhYjIxNzQzMzE3ZTQzZWUyZmI5MTc3YgY6BkVG--d428b16e7695666f152133f290c2cbfbb4d8afdc" OVER="false" INDEX=0 VALUE="x"

echo
