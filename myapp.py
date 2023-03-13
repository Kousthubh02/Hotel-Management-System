import requests

url = "http://localhost:8000/api/images/Southindian.jpeg"
response = requests.get(url)

if response.status_code == 200:
    print("Image is loading")
else:
    print("Image is not loading")
