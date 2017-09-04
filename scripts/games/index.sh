API="${API_ORIGIN:-http://tic-tac-toe.wdibos.com}"
URL_PATH="/games"

TOKEN="BAhJIiVlNTNkMGQ3ZDhhM2I1ODQ1YzcyNmU4MmM3Y2QwMTNjNgY6BkVG--bba72f2f822f6ee136e24e5b721a001af6026ac8"


curl "${API}${URL_PATH}" \
  --include \
  --request GET \
  --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json" \

echo
