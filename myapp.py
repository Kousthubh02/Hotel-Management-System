import requests
import json
url = 'http://localhost:8000/checkout/'

data = [{ "items": [{"id": 1, "name": "rasam", "price": 100.99}, 
                            {"id": 2, "name": "vada pav", "price": 50.99}, 
                            {"id": 3, "name": "ice cream", "price": 90.99}]}]

headers = {'Content-Type': 'application/json'}

response = requests.post(url, data=json.dumps(data), headers=headers)


if response.status_code == 201:    print('Data was successfully saved.')
else:
    print('Status code: ',response.status_code)
