pip3 install -r requirements.txt

curl -sSf -O https://raw.githubusercontent.com/bunnyxt/lcid/main/problems_all.json

python3 generate.py && mkdocs build
