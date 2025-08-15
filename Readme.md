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

5. **Apply database migrations** (migrations are already included):
    ```bash
    python manage.py migrate
    ```

6. **Create a superuser (optional, for admin access)**:
    ```bash
    python manage.py createsuperuser
    ```

7. **Run the development server**:
    ```bash
    python manage.py runserver
    ```

The server will start at `http://127.0.0.1:8000/` or `http://localhost:8000/`

## Database Management

**Important Notes:**
- The SQLite database (`db.sqlite3`) and all migrations are included in version control
- This preserves menu items, categories, and database schema across different environments
- For new setups, simply run `python manage.py migrate` to apply existing migrations
- Only run `python manage.py makemigrations` if you've made new model changes
- To reset the database completely (this will delete all data):
  ```bash
  # Delete the database file
  del db.sqlite3  # Windows
  # rm db.sqlite3  # macOS/Linux
  
  # Recreate and migrate
  python manage.py migrate
  python manage.py createsuperuser
  ```



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
