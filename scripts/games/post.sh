API="${API_ORIGIN:-http://tic-tac-toe.wdibos.com}"
URL_PATH="/games"

# ${TOKEN} =
# works

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Authorization: Token token=${TOKEN}"\
  --header "Content-Type: application/json" \

echo

# {"user":{"id":546,"email":"blue","token":"BAhJIiUxZDQ3YTllNjY0YTg4NjE0ZDlmZjMyM2Y3NDU0NTY4YgY6BkVG--edac1a540d32bc1ea935913ef9a50feb028f5733"}}
