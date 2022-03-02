# Contacts-API

## About 🕹️

This is an API made for the Contacts web application, an online application to save and organize all of your favorit contacts.

(All registered contacts are fictitious)

You can check the front-end application here:
https://github.com/victordurco/contacts

And the working application here:
https://pagaleve-contacts-api.herokuapp.com

---

## How to run in your machine 🖥️

```
git clone https://github.com/victordurco/contacts-api
```

```
cd contacts-api
```

```
npm i
```

Create a .env.dev file and fill it using your environment variables following the example at .env.example file. (You can also create a .env.test file following the same .env.example, if you want to run the tests).

### In your terminal

```
sudo su postgres
```

```
psql
```

```
CREATE DATABASE contacts_api
```

```
\c contacts_api
```

Copy everything in the DATABASE.sql file and paste on the terminal</br>
You can not exit the postgres admin, and run

```
npm run dev

```

</br>

<br>

## 🧰 Tech Stack

<p align="center">
<img alt="typescript" src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/>
<img alt="postgres" src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white"/>
<img alt="nodejs" src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/>
<img alt="expressjs" src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"/>
</p>

<br>
