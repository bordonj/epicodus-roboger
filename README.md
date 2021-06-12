# _Mr. Roboger's Neighborhood_

#### _Mr. Roboger's Neighborhood - 06/12/21 - Code Review003_

#### By _**Jennifer Bordon**_

## Technologies Used

* _HTML_
* _CSS_ 
* _Bootstrap_
* _jQuery_
* _JavaScript_


## Description

This is a web application that takes a number from a user and returns a range of numbers from 0 to the user inputted number. It displays the normal number on the column for "User" and any number that is an exception to what Roboger replaces is displayed in the column for "Mr. Roboger:". There are some exceptions where the ouput replaces certain numbers with phrases. 

## Setup/Installation Requirements

* On the repository linked to "https://github.com/bordonj/epicodus-roboger" - click the green button "Code" and clone the repository onto your local desktop. You can do so by typing this in your terminal (_make sure you're in your Desktop directory_!)
```
git clone https://github.com/bordonj/epicodus-roboger.git
```
* On your desktop, there should now be a directory labeled "epicodus-roboger"
* Click the folder "epicodus-roboger" on your Desktop
* To open the HTML file, and view the website, click on the file 'index.html'
* This should open up the website in a browser
* Enter name and a number to see how Roboger responds


## Specifications 
```
Describe: beepBoop()
Test: "It should return an array with a 0 if the number 0 is inputted"
Code: beepBoop(0);
Expected Output: '0'

Test: "It should return an array replacing the element that contains a 1 with a 'Beep!'"
Code: beepBoop(1);
Expected Output: 0, Beep! 

Test: "It should return an array replacing the element that contains 2 with a 'Boop!'"
Code: beepBoop(2);
Expected Output: 0, Beep, Boop!

Test: "It should return an array replacing the element that contains 3 with a 'Won't you be my neighbor?'"
Code: beepBoop(3);
Expected Output: 0, Beep!, Boop!, Won't you be my neighbor?

Test: "It should return a list of values that counts up to the number the user inputted, replacing each of the aforementioned numbers"
Code: beepBoop(5);
Expected Output: 0, Beep!, Boop!, Won't you be my neighbor? 4, 5

Test: "It should return a list of values that counts up to the number the user inputted (for even larger numbers), replacing each of the aforementioned numbers"
Code: beepBoop(500);
Expected Output: 0, Beep!, Boop!, Won't you be my neighbor?, 4, 5 (...respective number replacements)... 500
```

## Github Pages link

[Click here](https://bordonj.github.io/epicodus-roboger) for the Github Pages link. 

Alternatively, you can type "https://bordonj.github.io/epicodus-roboger/" in your web browser as well.

## Known Bugs

* On the DevTools console, there is a warning that displays _"DevTools failed to load SourceMap: Could not load content for file:///Users/jenniferbordon/Desktop/epicodus-roboger/css/bootstrap.css.map: System error: net::ERR_FILE_NOT_FOUND_", however, the bootstrap.css file is accessible on the index.html webpage

## License

Distributed under the MIT License. See LICENSE for more information.

## Contact Information

_jennifer.bordon@gmail.com_