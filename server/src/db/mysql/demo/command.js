// To install the Sequelize CLI:
// npm install--save - dev sequelize-cli

// To create an empty project you will need to execute init command
// npx sequelize-cli init

// To create a model named User
// npx sequelize-cli model: generate--name User--attributes firstName: string, lastName: string, email: string

// Running Migrations
// npx sequelize-cli db:migrate

// Undoing Migrations
// npx sequelize-cli db:migrate: undo

// To create a seed file which will add a demo user to our User table
// npx sequelize-cli seed: generate--name demo - user

// Running Seeds
// npx sequelize-cli db:seed: all

// Undoing Seeds
// npx sequelize-cli db:seed: undo

// If you wish to undo the most recent seed:
// npx sequelize-cli db:seed: undo

// If you wish to undo a specific seed:
// npx sequelize-cli db:seed: undo--seed name - of - seed - as -in -data

// If you wish to undo all seeds:
// npx sequelize-cli db:seed: undo: all