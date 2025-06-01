# Inventory Management System (CRUD Application) using MERN Stack

It is a simple MERN stack project about Inventory Management that lets the user create, read, update, delete (CRUD) & search for products from the MongoDB.

# To Run App:

### 1. Clone the repository into an IDE of your choice.  
### 2. Install the node package manager in both the Frontend and Backend files separately. 
* For Backend:  
```
cd Backend
npm install
```
* For Frontend:
``` 
cd Frontend  
npm install
```
### 3. In the MongoDB Compass:
* Create a database: IMS
* Create a collection inside that: products

### 4. To finally run the app, open a split terminal and inside it:  
  * First terminal:
       ```
       cd Backend
       npm run server
       ```
  * Second terminal:
    ```
    cd Frontend
    npm start
    ```

# Technologies Used:
### Frontend:
  * **React**:
    - Built the front UI using reusable components
    - Managed component lifecycles and states with hooks like `useState` and `useEffect`
    - RESTful API integration using axios and fetch
    - Client-side routing using `react-router-dom`
  * **React-Router-Dom**:
    - Navlink: It helps add style to the link of the current page so that the user can see what page they're on without reloading.
    - useParams: This helped me get the product ID from the URL generated to fetch the details.
    - useNaviagte: This was used to help navigate through different web pages after form submissions or button clicks.
  * **Axios**:
    - This was used in making HTTP requests from the React frontend to the express.js backend.
    - Handled all the RESTful api requests.
    - Was used in the form submission area to fetch the details of the product.

### Backend:
  * **Mongoose**:
    - Acted as the object data modelling library for the MongoDB.
    - It helped me define schemas and models for my MongoDB collection.
    - It helped me manage the relationship between data and the data structure consistenly throughout the app.
  * **Express.js**:
    - Used express to create RESTful API routes to handle the clients request like modifying, adding, deleting the data.
    - Provided an easy way to handle these requestions like GET, POST, PUT, DELETE.
    - Served as the main backend framework connecting the frontend to the database.
  * **Cors (Cross Origin Resource Sharing)**:
    - It is a browser security feature that basically stops the frontend from accessing the backend without permission.
    - It enabled the express backend to send headers allowing for requests from the React frontend.
    - This allows for safe and smooth communication between the Frontend and Backend.

# Output:
## 1. POST/CREATE a new product
![image](https://github.com/user-attachments/assets/afc103c2-efd8-4249-a505-510c8dac3a4a)
![image](https://github.com/user-attachments/assets/2d3e4598-4245-4760-b941-bef961e214de)
![image](https://github.com/user-attachments/assets/fdbbff6b-b919-4efe-9830-34496a489bf7)

## 2. GET/DISPLAYING products
![image](https://github.com/user-attachments/assets/58fd6318-f9c1-46f4-b6c9-5d977044fb15)

## 3. UPDATING a product
![image](https://github.com/user-attachments/assets/e7c7f0e2-4bb8-4544-bd84-a258a5ee0303)
![image](https://github.com/user-attachments/assets/561f8733-da31-4384-9042-b4acd6ee31a1)

## 4. DELETING a product
![image](https://github.com/user-attachments/assets/412e13bb-19c5-4528-9e9e-96c58ad7c10f)
![image](https://github.com/user-attachments/assets/76a0a6d3-4a69-4b88-817d-490ad8cb33da)

## 5. SEARCHING/DISPLAYING a product
![image](https://github.com/user-attachments/assets/630bcac7-4ec8-4270-8241-9686d7c348fc)
![image](https://github.com/user-attachments/assets/a55d4b5f-4e75-4d5a-9329-a93d18ea106b)






