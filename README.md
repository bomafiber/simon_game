# Simon Game Project

Simon is an electronic game of memory skill invented by Ralph H. Baer and Howard J. Morrison.
The game creates a series of tones and lights and requires a user/player to repeat the sequence.
If the user succeeds, the series becomes progressively longer and more complex. In normal mode the user repeats the round if the sequence is wrong. In strict mode the user starts from round 1 when the sequence is wrong. The game is over when the user completes 20 rounds.

## Getting Started

The project is hosted on Github pages https://bomafiber.github.io/simon_game/ and can be cloned via url https://github.com/bomafiber/simon_game.git

These steps below will get you a copy of the project up and running on your local machine.

1. Firstly, clone the repository by running the ```git clone https://github.com/bomafiber/simon_game.git``` command from a terminal.

2. Open the index.html file in any browser to launch the game.

3. Enable the **power** checkbox and then select the **strict** checkbox to play the game in strict mode or leave unchecked to play in normal mode.

3. Click the **Start** button to begin play.


### Prerequisites

What things you need to install the software and how to install them

```
Give examples
```

### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests


### Manual Testing

For this project I conducted the following types of testing:

* Functional testing
* Usability testing
* Cross browser testing

 The application was tested on following browsers(Firefox, Chrome and Internet Explorer). The application was also viewed and tested on  mobile devices.


### Automated Testing  

I used the Jasmine BDD framework for automated testing.

 1. Download the jasmine standalone distribution from Github https://github.com/jasmine/jasmine/releases and extract the folders to your local machine. I used version 2.99.1 for my project. It had a few vulnerabilities but it worked for this purpose.

 2. Link your source file and spec files in the head of the **specRunner.html** file and then launch the **specRunner.html** in a browser.


### User stories used to build the application

>**User Story:** I am presented with a random series of button presses.<br>
>**User Story:** Each time I input a series of button presses correctly, I see the same series of button presses but with an additional step.<br>
>**User Story:** I hear a sound that corresponds to each button both when the series of button presses plays, and when I personally press a button.<br>
>**User Story:** If I enter the wrong button sequence, I am notified that I have done so, and that series of button presses starts again to remind me of the pattern so I can try again.<br>
>**User Story:** I can see how many steps are in the current series of button presses.<br>
>**User Story:** I can play in strict mode where if I get a button press wrong, it notifies me that I have done so, and the game restarts from round 1 at a new random series of button presses.<br>
>**User Story:** I can win the game by getting a series of 20 steps correct and I am notified of my victory.<br>

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [JavaScript](https://en.wikipedia.org/wiki/JavaScript) - Used to enable interaction with the application via the browser.
* [HTML5](https://en.wikipedia.org/wiki/HTML) - Used to markup / build the application framework.
* [CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets) - Used to style the frontend

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc
