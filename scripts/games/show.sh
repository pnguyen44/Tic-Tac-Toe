API="${API_ORIGIN:-http://tic-tac-toe.wdibos.com}"
URL_PATH="/games/${ID}"

curl "${API}${URL_PATH}" \
  --include \
  --request GET \
  --header "Authori÷zation: Token token=${TOKEN}" \
  --header "Content-Type: application/json" \

echo
