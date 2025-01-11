```javascript
//Incorrectly setting a value in Firebase Realtime Database
db.ref('users/' + userId).set({
  name: userName,
  email: userEmail,
  //Missing a crucial field
});
```