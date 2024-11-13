# Endpoint SPK API Spec

## 1. Get All SPK
Endpoint: `GET /api/SPK/`

**Response Success :**
 - **200 OK:** Return List of SPK
```json
{

}

```

**Response Error :**
- **400 Bad Request:** Invalid request body or insufficient quantity !
- **401 Bad Request:** Unauthorized: Invalid or expired token !



## 2. Get SPK by User ID
Endpoint: `GET /api/SPK/user`

**Response Success :**
 - **200 OK:** Return unique SPK
```json
{

}
```

**Response Error :**
- **400 Bad Request:** Invalid request body or insufficient quantity !
- **401 Bad Request:** Unauthorized: Invalid or expired token !



## 3. Request SPK Material
Endpoint: `POST /orders/order

**Resquest Body :**
```json
{
    "materialId": 2,
    "orderQty": 10
}
```

**Response Success :**
 - **200 OK:** Return unique SPK
```json
{
   "id": 8,
   "userId": 1,
   "materialId": 2,
   "orderQty": 10,
   "status": "PENDING",
   "createdAt": "2024-11-13T00:28:08.121Z",
   "updatedAt": "2024-11-13T00:28:08.121Z"
}
```
**Response Error : ??**
- **400 Bad Request:** Invalid request body or insufficient quantity !
- **401 Bad Request:** Unauthorized: Invalid or expired token !
- **404 Not Found:** Item with the specified ID not found



## 4. Verify Request SPK
Endpoint: `PATCH /api/SPK/verify/{spk_id}`

** Request Body:**
 - **200 OK:** Return unique SPK
```json
{
 "status" : "string"
}
```
**Response Error :**
- **400 Bad Request:** Invalid request body or insufficient quantity !
- **401 Bad Request:** Unauthorized: Invalid or expired token !
- **500 internal server error:** Failed to verify transaction !