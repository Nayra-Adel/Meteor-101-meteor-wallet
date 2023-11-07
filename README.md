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