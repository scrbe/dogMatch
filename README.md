# DogMatch

## Description

This is an app to find your furry friends a couple. The app helps to list, create, edit and remove dogs to find potential dog partners.

## User Stories

- 404: As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault
- Signup: As an anon I can sign up to the app so that I can start creating my user and dog profile
- Login: As a user I can login to the app so that I can match with other dogs and contact their owners
- Logout: As a user I can logout from the app so no one else can use it
- View Dogs: As a user I want to see a list of all of the dogs available and also a view of each dog individually
- Send a request to the pet owner: As a user I can send a messame to the owner of my favorite dog to set up an appointment
- Delete request to the pet owner: As a user I can remove the message I sent to a pet owner
- Add Dogs: As a user I can add as many dogs as I own
- Edit Dogs: As a user I can edit my dog(s)
- Delete Dogs: As a user I can delete a dog
- View User profile: As a user I can see my profile
- Edit User profile: As a user I can edit my profile

## Backlog

- sign up with social networks
- send an email when contacted
- añadir notificaciones
- dogsApi.editDog(dogId, dogBody)
- dogsApi.deleteDog(dogId)

## Client / Frontend

### React Router Routes (React App)

| Path      | Component       | Permissions              | Behavior                                                                                                              |
| --------- | --------------- | ------------------------ | --------------------------------------------------------------------------------------------------------------------- |
| /         | HomePage        | public <Route>           | Home page                                                                                                             |
| /signup   | SignupPage      | anon only <AnonRoute>    | Signup form, link to login, navigate to homepage after signup                                                         |
| /login    | LoginPage       | anon only <AnonRoute>    | Login form, link to signup, navigate to homepage after login                                                          |
| /dogs     | DogsListPage    | all users <PublicRoute>  | Page that shows all of the dogs in a list                                                                             |
| /dogs/:id | DogDetailPage   | user only <PrivateRoute> | Page with the details of a dog, a favorite button and an edit form (if its your dog)                                  |
| /profile  | UserProfilePage | user only <PrivateRoute> | Page with the details of a user, with a form to edit the user, a users'd dog list, and a form to add or edit new dogs |

## Components

- HomePage
- LoginPage
- SignupPage
- DogsListPage

  - DogCard

- DogDetailPage

  - EditDogForm
  - Favorite Dog Button
  - Contact user form
  - Delete dog if it's your own

- UserProfilePage

  - AddDogForm
  - EditProfileForm
  - Owned Dogs list

- Routes

  - AnonRoute
  - PrivateRoute

- Common
  - Navbar
  - Footer
  - Button...

## Services

- Auth Service

  - authApi.login(user)
  - authApi.signup(user)
  - authApi.logout()

- Dogs Service

  - dogsApi.list()
  - dogsApi.addDog(dog)
  - dogsApi.getDogDetails(dogId)
  - dogsApi.editDog(dogId, dogBody)
  - dogsApi.deleteDog(dogId)

- User Service

  - usersApi.editUser(userId, userBody)

- Message Service
  - messageApi.list()
  - messageApi.send(messageBody)

# Server / Backend

## Models

User model

        {
          username: {type: String, required: true },
          email: {type: String, required: true, unique: true},
          password: {type: String, required: true},
          ownedDogs: [ { type: mongoose.Schema.Types.ObjectId, ref: "Dog" } ],
          favoriteDogs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Dog" }],
          requests: [{ type: mongoose.Schema.Types.ObjectId, ref: "Message" },]
        }

Dog model

        {
          name: {type: String, required: true },
          breed: {type: String, required: true },
          age: {type: Number, required: true },
          gender: { type: Number, required: true },
          description: {type: String, required: true },
          popularity: Number,
          dogImage: String,
          user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
          messages: [{ type: mongoose.Schema.Types.ObjectId, ref: "Message" },]
        }

Message model

        {
          author: {type: String, required: true },
          message: {type: String, required: true },
          dog: { type: mongoose.Schema.Types.ObjectId, ref: "Dog" }
        }

## API Endpoints (backend routes)

| HTTP Method | URL              | Request Body                     | Description                                                                                                                     |
| ----------- | ---------------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| POST        | /auth/signup     | {username, email, password}      | Checks if fields not empty (422) and user not exists (409), then create user with encrypted password, and store user in session |
| POST        | /auth/login      | {email, password}                | Checks if fields not empty (422), if user exists (404), and if password matches (404), then stores user in session              |
| POST        | /auth/logout     | (empty)                          | Logs out the user                                                                                                               |
| GET         | /api/dogs        |                                  | Sends all dogs                                                                                                                  |
| GET         | /api/dogs/:dogId | {dogId}                          | Sends one specific dog                                                                                                          |
| POST        | /api/dogs        | {title, breed, age, description} | Create and saves a new dog in the DB                                                                                            |
| PUT         | /api/dogs/:dogId | {title, breed, age, description} | Edits dog in the DB                                                                                                             |
| DELETE      | /api/dogs/:dogId | {dogId}                          | Deletes dog                                                                                                                     |
| GET         | /api/user        | {}                               | Sends user personal details and renders a list of his/her dogs                                                                  |
| PUT         | /api/user        | {username ...}                   | Edits user                                                                                                                      |
| PUT         | /api/user/:dogId | (empty)                          | Toggles push of dog Id to the user's favoriteDogs array                                                                         |
| GET         | /api/messages    | (empty)                          | List all of the user's requests                                                                                                 |
| POST        | /api/messages    | {message, dogId}                 | Send a request from a logged user to another user's dog                                                                         |

## Links

### Trello/Kanban

Link to your trello board or picture of your physical board

### Git

The url to your repository and to your deployed project

Client repository Link

Server repository Link

Deployed App Link

### Slides

The url to your presentation slides

Slides Link
