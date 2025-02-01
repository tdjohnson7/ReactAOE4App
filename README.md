# Age-of-Empires-4-Unit-Counter-Calculator

The React Version!

This app is designed to help Age of Empires 4 players simulate a battle between two teams of units to see which side would defeat the other without the rigorous, difficult and tedious setup it takes to create a true simulation in the game.

https://github.com/user-attachments/assets/456977de-4e8f-4f39-8da1-da82037c5d2e

**Link to project:** [https://age-of-empires-4-unit-counter-calculator.onrender.com](https://reactaoe4app-p0yu.onrender.com/)

## How It's Made:

**Tech used:** React, Node, Express, MongoDB

The app is built by using React.js on the frontend with a Node.js backend. Each select element houses a different set on information from the MongoDB database. Each subsequent select element is based on the values of the other select elements to show the correct stats for the unit specified (civ > unit > age > techs available.) Once the user has chosed two teams and they hit the submit button, the data is sent to the server and a series of calculations are used to determine a team's true damage (damage minus armor, etc.) and time to kill the other team. Once the calculations are complete a response is sent back and the state of the elements is updated!

## Optimizations

include the resource value of each team and compare them
use the units pictures during the selection process
be able to include one than one unit type on each team (challenge: how to determine which unit is attacking on the other to correctly apply bonuses.)
integrate civ attack speed bonuses, Abbasid Camel Unease bonus, etc.
update with new civs

## Lessons Learned:

React is alot easier than vanilla JS for managing state!
