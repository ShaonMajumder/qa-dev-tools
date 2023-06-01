/**
 * Retrieves the first DOM element matching the XPath expression.
 * @param {string} path - The XPath expression to evaluate.
 * @returns {Node|null} - The matching DOM element, or null if not found.
 */
export const getElementByXPath = (path) => {
	return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
};
  
/**
 * Retrieves an array of DOM elements matching the XPath expression.
 * @param {string} xpathToExecute - The XPath expression to evaluate.
 * @returns {Node[]} - An array of DOM elements matching the expression.
*/
export const getElementsByXPath = (xpathToExecute) => {
	const result = [];
	const nodesSnapshot = document.evaluate(xpathToExecute, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
	for (let i = 0; i < nodesSnapshot.snapshotLength; i++) {
		result.push(nodesSnapshot.snapshotItem(i));
	}
	return result;
};
  
/**
* Changes the inner HTML text of a DOM element specified by XPath.
* Prompts the user to enter the XPath and the new message.
*/
export const changeHTMLText = () => {
	const XPATH = prompt("Please enter your XPath", "");
	const message = prompt("Please enter your message", "");

	if ((XPATH == null || XPATH == "") && (message == null || message == "")) {
		txt = "User cancelled the prompt.";
		alert("Canceled!");
	} else {
		getElementByXPath(XPATH).innerHTML = message;
	}
};
  