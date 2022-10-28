# _Mr Robogers_

#### By _**Yoonis Ali**_

#### _This is a webpage that changes numbers to strings._

[Click Here](https://yoonisali.github.io/programming-language-suggester/) to check out the website!

## Technologies Used

* _HTML_
* _JavaScript_
* _CSS_

## Description

_This is a webpage that will change the numbers 1, 2, and 3 and change them to "beep!", "boop!", and "won't you be my neighbor?"_

## Setup/Installation Requirements

* _Clone git repository_
* _Open html file named index.html in a web browser_

## Tests

```
Describe: rogersNumbers();
Test: "It should turn the number into an array of strings counting up from 0 to the inputted number"
Code: rogersNumbers(5);
Expected Output: [0,1,2,4,5];
```

```
Describe: rogersSpeaks();
Test: "if number contains 1 -> returns beep!
       if number contains 2 -> returns boop!
       if number contains 3 -> returns won't you be my neighbor?
       else -> it returns the number"
Code: rogersSpeaks(5);
Expected Output: [0, beep!, boop!, won't you be my neighbor?]
```

```
Describe: rogersPrints();
Test: "It should create li and ul html tags, while also printing the output"
Code: rogersPrints(5);
Expected Output: [0, beep!, boop!, won't you be my neighbor?]
```

## Known Bugs

* none

## License

MIT
Copyright (c) _Yoonis Ali_
