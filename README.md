# Meteor-101-meteor-wallet

1. Create a new collection for Contacts
2. Insert and fetch Contacts
3. Deploy to Galaxy

    - You will get an error when you deploy in galaxy
      
      ${{\color{red}ERROR: DEPLOYING \ THE \ APP}}$
      ${{\color{red}- \ error \ preparing \ repository:}}$
      ${{\color{red}In \ order \ to \ use \ push \ to \ deploy}}$
      ${{\color{red}your \ Meteor \ version \ needs \ to \ be}}$
      ${{\color{red}at \ least \ v2.3.7, please \ upgrade \ your \ app.}}$

    - Update Meteor
      ```
      meteor update --release METEOR@2.3.7
      ```
4. Styled with Tailwind CSS
    ```
    meteor npm install tailwindcss@2.2.19 postcss@8.3.1 postcss-load-config@3.1.0 autoprefixer@10.4.0
    ```
  - Set up the right Meteor package for PostCSS running the commands below:
    ```
    meteor remove standard-minifier-css
    meteor add juliancwirko:postcss
    ```
5. Remove insecure package
6. Remove autopublish package
7. Use Meteor's Methods (Remote Procedure Call) API
      
    **Remember to install**
      ```
      meteor npm install @heroicons/react
      ```
8. Use Publications and Subscriptions
9.  Use useFind and useSubscribe hooks
---
## Disable Quick Prototyping

### Removing the insecure package

- Every newly created Meteor project has the ```insecure package``` installed by default.
- This package allows us to edit the database from the client, which is useful for quick prototyping.
- We need to remove it, because as the name suggests it is ```insecure```.
  ```
  meteor remove insecure
  ```
- Now our app changes don’t work anymore as we have revoked all client-side database permissions. If we try to insert a new contact for example, we are going to see ${{\color{red}insert \ failed: Access \ denied }}$ in our browser console.

### Removing the autopublish package

- Just like with ```insecure package```, all new Meteor apps start with the ```autopublish package```, which automatically synchronizes all the database contents to the client. So we should remove it:
  ```
  meteor remove autopublish
  ```
- When the app refreshes, the contacts list will be empty. Without the ```autopublish package```, we will have to specify explicitly what the server sends to the client.
- The functions in Meteor that do this are ```Meteor.publish``` and ```Meteor.subscribe```.
---
## Meteor's Methods (Remote Procedure Call) API
    
  **What is a Method?**
  - Methods are Meteor’s remote procedure call (RPC) system, used to save user input events and data that come from the client.
  - If you’re familiar with REST APIs or HTTP, you can think of them like POST requests to your server, but with many nice features optimized for building a modern web application.
  - At its core, a Method is an API endpoint for your server.
  - you can define a Method on the server and its counterpart on the client, then call it with some data, write to the database, and get the return value in a callback.
  - Meteor Methods are also tightly integrated with the pub/sub and data loading systems of Meteor to allow for Optimistic UI—the ability to simulate server-side actions on the client to make your app feel faster than it actually is.
  - Reference: [Meteor Methods](https://guide.meteor.com/methods.html)
---
## Publications and Data Loading

In a traditional, HTTP-based web application, the client and server communicate in a “request-response” fashion. Typically the client makes RESTful HTTP requests to the server and receives HTML or JSON data in response, and there’s no way for the server to “push” data to the client when changes happen at the backend.

Meteor is built from the ground up on the Distributed Data Protocol (DDP) to allow data transfer in both directions. Building a Meteor app doesn’t require you to set up REST endpoints to serialize and send data. Instead you create publication endpoints that can push data from server to client.

In Meteor a publication is a named API on the server that constructs a set of data to send to a client. A client initiates a subscription which connects to a publication, and receives that data. That data consists of a first batch sent when the subscription is initialized and then incremental updates as the published data changes.

So a subscription can be thought of as a set of data that changes over time. Typically, the result of this is that a subscription “bridges” a server-side MongoDB collection, and the client side Minimongo cache of that collection. You can think of a subscription as a pipe that connects a subset of the “real” collection with the client’s version, and constantly keeps it up to date with the latest information on the server.

Reference: [Data Loading](https://guide.meteor.com/data-loading.html)
---