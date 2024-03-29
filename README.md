# Simon Game Project

Simon is an electronic game of memory skill invented by Ralph H. Baer and Howard J. Morrison.
The game creates a series of tones and lights and requires a user/player to repeat the sequence.
If the user succeeds, the series becomes progressively longer and more complex. In normal mode the user repeats the round if the sequence is wrong. In strict mode the user starts from round 1 when the sequence is wrong. The game is over when the user completes 20 rounds.


## Features of the application captured in User stories

>**User Story:** I am presented with a random series of button presses.<br>
>**User Story:** Each time I input a series of button presses correctly, I see the same series of button presses but with an additional step.<br>
>**User Story:** I hear a sound that corresponds to each button both when the series of button presses plays, and when I personally press a button.<br>
>**User Story:** If I enter the wrong button sequence, I am notified that I have done so, and that series of button presses starts again to remind me of the pattern so I can try again.<br>
>**User Story:** I can see how many steps are in the current series of button presses.<br>
>**User Story:** I can play in strict mode where if I get a button press wrong, it notifies me that I have done so, and the game restarts from round 1 at a new random series of button presses.<br>
>**User Story:** I can win the game by getting a series of 20 steps correct and I am notified of my victory.<br>


## Technologies Used

* [JavaScript](https://en.wikipedia.org/wiki/JavaScript) - Used to enable interaction with the application via the browser.

* [HTML5](https://en.wikipedia.org/wiki/HTML) - Used to markup / build the application framework.

* [CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets) - Used to style the frontend

* [Jasmine](https://github.com/jasmine/jasmine) - Used for automated testing.


## Testing

### Manual Testing

For this project I conducted the following types of testing:

* Functional testing
* Usability testing
* Cross browser testing

 The application was tested on Firefox, Chrome and the Internet Explorer browser. The application was also viewed and tested on mobile devices.

### Automated Testing  

I used the Jasmine BDD framework for automated unit testing.

 1. I committed the jasmine standalone distribution from **Github** https://github.com/jasmine/jasmine/releases with the project. I used version 2.99.1 for the project. It had a few vulnerabilities but it worked for this purpose.

 2. Link your source file and spec files in the head of the **specRunner.html** file and then launch the **specRunner.html** in a browser.


## Deployments

 The project is hosted on Github pages https://bomafiber.github.io/simon_game/ and can be cloned via url https://github.com/bomafiber/simon_game.git

 These steps below will get you a copy of the project up and running on your local machine.

 1. Firstly, clone the repository by running the ```git clone https://github.com/bomafiber/simon_game.git``` command from a terminal.

 2. Open the index.html file in any browser to launch the game.

 3. Enable the **power** checkbox and then select the **strict** checkbox to play the game in strict mode or leave unchecked to play in normal mode.

 3. Click the **Start** button to begin play.

## Versioning
I used **Git** and **Github** for versioning (https://github.com) .

## Resource
 **Marjin Haverbeke** - *Eloquent JavaScript*

## Contributors
* **Ignatius Ukwuoma**<br/>
* **Gonzalo Girasol**<br/>
* **Sam Jenkins**

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments
**Ignatius Ukwuoma**
