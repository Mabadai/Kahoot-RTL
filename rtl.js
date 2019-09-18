// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
//code: 'if ("'+tab.url+'".includes("play.kahoot.it")) {console.log("aaa");}'
// Called when the user clicks on the browser action.

chrome.browserAction.onClicked.addListener(function (tab) {
    console.log('Turning ' + tab.url + ' red!');
    chrome.tabs.executeScript({
        code:
            ''
    });
});
