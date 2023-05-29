This is a [Next-Auth.js](https://next-auth.js.org/) example project to show how next-auth works with **CredentialsProvider** and **GithubProvider**

## Getting Started

---

### Install packages from scratch:

```
npm install next-auth @next-auth/mongodb-adapter mongodb
```

### Or clone this repository:

```
git clone https://github.com/aaronaira/next-auth-mongodbadapter.git
cd next-auth-example
npm install
```

### Configure your local environment

Rename and edit env.example file with your data

```
cp .env.local.example .env.local
```

### Run server

```
npm run dev
```

## Test the example

---

### CredentialsProvider

In **auth/api/[...nextauth]/route.js**, you need to set up your logic to validate the user. In my case I have a hardcoded user, but you can use the methods provided by the next-auth adapters to find one.

```javascript
async authorize(credentials, req) {
        /*
            You can use the methods gived by next-auth adapter to find your user:
            Example: authOptions.adapter.getUserByEmail("youremail@gmail.com)
        */
        const user = await authOptions.adapter.getUser(
          "6471f710f772cf139bc5142e"
        );
        if (user) {
          return user;
        } else {
          return null;
        }
      },
```

you can also pass the email via credentials, like so:

```javascript
async authorize(credentials, req) {
        const user = await authOptions.adapter.getUserByEmail(
          credentials.username
        );
        if (user) {
          return user;
        } else {
          return null;
        }
      },
```

### Browse

Open your browser and go to http://localhost:3000/api/auth/signin/credentials

After using your login data you will be authorized. You can navigate to http://localhost:3000/api/user to check it
