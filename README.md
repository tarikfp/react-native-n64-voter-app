# N64 Voter App

## Introduction

This app's aim is allow users to vote for their favorite Nintendo 64 app.

This project is initialized using the https://github.com/tarikpnr/react-native-typescript-starter repo. 🚀

## Objective

We have a Nintendo 64. As a team, we need to decide which game to buy next.
Create a small single-page application that allows us to vote
on our favorite Nintendo 64 game.

## Requirements

- Please make an app to vote.
  - You can hardcode game data.
  - No need to persist data.
  - Show the box arts or game illustrations in a grid, all at once on the page (so no pagination).
  - It should allow voting on the 5-10 most popular N64 games.
  - The definition of 'popular' is up to you. Can be rating, sales or your personal opinion.
  - Clicking/tapping on a game casts a vote. The vote count should be visible somehow.

## Running locally

Install dependencies

```bash
  yarn install
```

Run json-server

```bash
  yarn start-server
```

Start the emulator for ios

```bash
 cd ios && pod install && yarn run ios
```

or for android

```bash
  yarn run android
```
