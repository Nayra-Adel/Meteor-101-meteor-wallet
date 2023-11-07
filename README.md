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