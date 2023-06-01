export const getElementByXPath = (path) => {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
};

export const getElementsByXPath = (xpathToExecute) => {
	const result = [];
	const nodesSnapshot = document.evaluate(xpathToExecute, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
	for (let i = 0; i < nodesSnapshot.snapshotLength; i++) {
	  result.push(nodesSnapshot.snapshotItem(i));
	}
	return result;
};

export const changeHTMLText = () => {
	const XPATH = prompt("Please enter your XPath", "");
	const message = prompt("Please enter your message", "");

	if ((XPATH == null || XPATH == "") && (Message == null || Message == "")) {
		txt = "User cancelled the prompt.";
		alert("Canceled!");
	} else {
		getElementByXPath(XPATH).innerHTML = message;
	}
};