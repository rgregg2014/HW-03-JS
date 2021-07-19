This assignment was an exercise in utilizing global browser features with JavaScript to create a random password generator. It required using JavaScript functions as well as procedural thinking and logic to complete.

## User Story

AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security

## Acceptance Criteria

GIVEN I need a new, secure password

- WHEN I click the button to generate a password,
  THEN I am presented with a series of prompts for password criteria
- WHEN prompted for password criteria,
  THEN I select which criteria to include in the password
- WHEN prompted for the length of the password,
  THEN I choose a length of at least 8 characters and no more than 128 characters
- WHEN asked for character types to include in the password,
  THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
- WHEN I answer each prompt,
  THEN my input should be validated and at least one character type should be selected
- WHEN all prompts are answered,
  THEN a password is generated that matches the selected criteria
- WHEN the password is generated,
  THEN the password is either displayed in an alert or written to the page

## Application

Based on the problem we were given to solve, the class put together the following pseudocode to list out the steps necessary to complete the assignment.

- 1-a user clicks the button to generate password
- 2-presented with a series of prompts
  - -how many characters? (only allow 8-128-validation) number
  - -if it's lower than 8 or higher than 128
  - -message: number has to be 8-128 characters
  - -ok to use lower case? (boolean) abcdefghijklmnopqrstuvwxyz (confirmation)
  - -ok to use upper case? (boolean) ABCDEFGHIJKLMNOPQRSTUVWXYZ (confirmation)
  - -ok to use special characters? (boolean) !@#$%^&\*()\_+=? (confirmation)
  - -ok to use numbers? (boolean) 0123456789 (confirmation)
  - -check at least one character type should be selected
  - -if not? restart the prompts
  - -generate password
  - -combine selected list into big list, randomize, select correct number of values, place values into new string, return new string

## Credits

https://www.youtube.com/watch?v=xXwSJGYqeIQ&ab_channel=SteveGriffith-Prof3ssorSt3v3
(YouTube video about alert, confirm, and prompt dialogues from channel Steve Griffith)

https://www.youtube.com/watch?v=duNmhKgtcsI&ab_channel=TraversyMedia
(YouTube video with a detailed explanation of the Math.random functions)

Base HTML and CSS provided by Columbia University Full-Stack Flex Bootcamp.
