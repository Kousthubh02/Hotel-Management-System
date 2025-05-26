To create a virtual environment and install Django, Django REST framework, Django CORS headers, and Pillow, follow these steps:

1. **Create a virtual environment**:
    ```bash
    python -m venv venv
    ```

2. **Activate the virtual environment**:
    - On Windows:
        ```bash
        .\venv\Scripts\activate
        ```
    - On macOS/Linux:
        ```bash
        source venv/bin/activate
        ```

3. **Install the required packages**:
    ```bash
    pip install django djangorestframework django-cors-headers pillow
    ```

4. **Verify the installations**:
    ```bash
    pip list
    ```

This will show you a list of installed packages, including Django, Django REST framework, Django CORS headers, and Pillow.



## API Routes

Below are the available API endpoints provided by the Django backend:

| Endpoint                  | Method | Description                                 |
|---------------------------|--------|---------------------------------------------|
| `/api/category/`          | GET    | List all categories                         |
| `/api/southindian/`       | GET    | List all South Indian dishes                |
| `/api/hotdrinks/`         | GET    | List all hot drinks                         |
| `/api/mojito/`            | GET    | List all mojitos                            |
| `/api/sandwitch/`         | GET    | List all sandwiches                         |
| `/api/pizza/`             | GET    | List all pizzas                             |
| `/api/burger/`            | GET    | List all burgers                            |
| `/api/pavbhaji/`          | GET    | List all pav bhaji dishes                   |
| `/api/punjabi/`           | GET    | List all Punjabi dishes                     |
| `/api/chinese/`           | GET    | List all Chinese dishes                     |
| `/api/rice/`              | GET    | List all rice dishes                        |
| `/api/milkshake/`         | GET    | List all milkshakes                         |
| `/api/dessert/`           | GET    | List all desserts                           |
| `/api/checkout/`          | GET    | List all checkout records                   |
| `/api/checkout/`          | POST   | Create a new checkout record                |
| `/api/staff_login/`       | POST   | Staff login (expects username & password)   |

All endpoints return JSON responses.  
For POST requests, send data as JSON in the request body.
