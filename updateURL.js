//Adds proxy address to tab url and reloads the tab
function updateURL(tab){
  newURL= new URI(tab.url);
  newURL.authority = newURL.authority + ".ezproxy.uef.fi:2048";
  chrome.tabs.update(tab.id, {url: ""+newURL});
}

//On click of the browser action updateURL
chrome.browserAction.onClicked.addListener(updateURL);

//Automatically add proxy address to urls in the filter list
chrome.webNavigation.onBeforeNavigate.addListener(updateURL);
}, {url: [{hostSuffix: 'acm.org'},
		//   {hostSuffix: 'elsevier.com'}, //Not working
           {hostSuffix: 'ieee.org'}]});
