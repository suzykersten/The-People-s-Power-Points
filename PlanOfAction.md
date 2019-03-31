# Present.io

## Main goals

Have an easy way to setup powerpoint-like presentations when more than one person is presenting at a time.

## Good Links

Postgres setup:
- https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-16-04

Node.js
- github starter: https://github.com/MLH/mlh-hackathon-nodejs-starter#installation-guide
- Github starter guide: https://github.com/MLH/mlh-hackathon-nodejs-starter/blob/master/docs/USER_GUIDE.md


- deploying 1: https://cloud.google.com/functions/docs/deploying/repo
- deploying 2: https://cloud.google.com/appengine/docs/flexible/nodejs/testing-and-deploying-your-app

Express (node.js thing)
- Routing: https://expressjs.com/en/starter/basic-routing.html
- More in-depth routing: https://expressjs.com/en/guide/routing.html
-

## Minimum Viable Product

A list of links that can be added to and accessed.

### Steps needed to make that MVP

- Create a node.js app running:
- - Create database with entries:
- - - Session: -> list of presentios
- - - Each presentio: Name, link, order

- - Add info to database from inputText in html
- - - need name, link

- be able to re-order presentations
- Have a button to open all presentations, next 5 presentations at a time in new tabs

## Things to add to MVP

- Be able to make multiple presentation sets that are indexed by unique url's
- make it look nice with Bulma
- drag 'n drop to reorder presenting order
- get it running on GCP
- Get the server running on GCP