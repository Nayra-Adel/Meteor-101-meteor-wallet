# Meteor-101-meteor-wallet

1. Create a new collection for Contacts
2. Insert and fetch Contacts
3. Deploy to Galaxy

    - You will get an error when you deploy in galaxy
      
      ${{\color{red}ERROR: DEPLOYING \ THE \ APP \ - \ error \ preparing \ repository: \ In \ order to use \ push \ to \ deploy \ your \ Meteor \ version \ needs to \ be \ at \ least \ v2.3.7, please \ upgrade \ your \ app.}}$

    - Update Meteor
      ```
      meteor update --release METEOR@2.3.7
      ```