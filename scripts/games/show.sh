
ID=5526
TOKEN="BAhJIiVkNGM4ZTI3NzBhY2Y0ZjYyNTZiNWFlY2M0NmE0ZWZjNwY6BkVG--33f13e5113ec7e8c63f32255d5c3fa9c555a9256"


API="${API_ORIGIN:-http://tic-tac-toe.wdibos.com}"
URL_PATH="/games/${ID}"



curl "${API}${URL_PATH}" \
  --include \
  --request GET \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=$TOKEN" \

echo
