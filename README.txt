PORTFOLIO SLIDE PROJECT

1. Firebase Console:
   Authentication -> Sign-in method -> Email/Password -> Enable.
   Authentication -> Users -> Add user. This email/password is the admin login.

2. Firestore:
   Create Firestore Database.
   In Rules, paste firestore.rules from this project.
   The public site can read slides; only logged-in Firebase users can create/update/delete.

3. Cloudinary:
   Cloud name: y6kr5fnv
   Upload preset: medical
   The preset must be UNSIGNED. Do not put a Cloudinary API Secret in frontend code.

4. Files:
   index.html = public carousel
   admin-login.html = admin login
   admin.html = add/edit/delete dashboard
   firebase-config.js = Firebase setup

5. Important:
   GitHub Pages will work for this frontend because it is static.
   Firebase Authentication/Firestore and Cloudinary handle the backend services.

6. Firestore collection:
   slides
   Fields: imageUrl, name, day, date, startTime, endTime, subject, createdAt, updatedAt

7. If you want only one specific admin account:
   Do not share the admin credentials. For stronger restriction, add an admin UID/email check in the rules later.
