// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
//code: 'if ("'+tab.url+'".includes("play.kahoot.it")) {console.log("aaa");}'
// Called when the user clicks on the browser action.

chrome.browserAction.onClicked.addListener(function (tab) {
    console.log('Turning ' + tab.url + ' red!');
    chrome.tabs.executeScript({
        code:
            '  if ("' + tab.url + '".includes("kahoot.it")) {var all = document.getElementsByTagName("span");for(var i = 0; i<all.length; i++) {all[i].style.direction = "rtl"; all[i].style.textAlign = "-webkit-right";} document.getElementsByTagName("BODY")[0].style.textAlign = "-webkit-right"; document.getElementsByTagName("BODY")[0].style.direction = "rtl"; }; '
    });
});
