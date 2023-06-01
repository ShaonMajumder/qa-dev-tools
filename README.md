# QA Dev Tools

QA Dev Tools is a collection of utility functions and tools for quality assurance (QA) in software development projects.

## Installation

Install the package using npm:

```bash
npm install qa-dev-tools
```

or,

```bash
yarn add qa-dev-tools
```

## Usage

Import the package into your project:

```javascript
import {
  getElementByXPath,
  getElementsByXPath,
  changeHTMLText,
} from "qa-dev-tools";
```

`getElementByXPath(path)`
Retrieves the first DOM element matching the XPath expression.

path (string): The XPath expression to evaluate.
Returns: The matching DOM element, or null if not found.

Example usage:

```javascript
const element = getElementByXPath('//div[@class="example"]');
```

`getElementsByXPath(xpathToExecute)`
Retrieves an array of DOM elements matching the XPath expression.

xpathToExecute (string): The XPath expression to evaluate.
Returns: An array of DOM elements matching the expression.
Example usage:

```javascript
const elements = getElementsByXPath('//div[@class="example"]');
```

`changeHTMLText()`
Changes the inner HTML text of a DOM element specified by XPath.
Prompts the user to enter the XPath and the new message.

Example usage:

```javascript
changeHTMLText();
```

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

