API="${API_ORIGIN:-http://tic-tac-toe.wdibos.com}"
URL_PATH="/games"

# TOKEN ="BAhJIiVmNGFhYzlhYWRkZTk0NDJmMjI5ODI3OGUxNWZlZDg1NgY6BkVG--b19109063f0bde5cb12e6a67a5d9bad9282760d8"

# works

curl "${API}${URL_PATH}" \
  --include \
  --request GET \
  --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json" \

echo
