function getElementByXPath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

function getElementsByXPath(xpathToExecute){
  var result = [];
  var nodesSnapshot = document.evaluate(xpathToExecute, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null );
  for ( var i=0 ; i < nodesSnapshot.snapshotLength; i++ ){
    result.push( nodesSnapshot.snapshotItem(i) );
  }
  return result;
}

function ChangeHTMLText(){
	var XPATH = prompt("Please enter your Xpath", "");
	var Message = prompt("Please enter your messaege", "");

	if ((XPATH == null || XPATH == "") && (Message == null || Message == "")) {
	  txt = "User cancelled the prompt.";
	  alert("cancled !!!");
	} else {
	  getElementByXPath(XPATH).innerHTML = Message;
	}
}