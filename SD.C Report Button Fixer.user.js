// ==UserScript==
// @name         SD.C Report Button Fixer
// @namespace    https://bots.server-discord.com/
// @version      1.0
// @description  Fix comment report button :p
// @author       cipherskyinc
// @match        https://bots.server-discord.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    setInterval(function () {
        var reportLoadButton = document.getElementById("commentShowMore");
        if(reportLoadButton) return reportLoadButton.click();
        else return document.getElementsByName("ModalCommentBTN").forEach(function (report) {
            show('suc', 'SD.C Report Button Fixer', 'Репорт на ' + report.getAttribute("data-name") + ' прогружен.');
            report.outerHTML = '<button onclick="socket.emit(\'reportComment\', \'' + window.location.pathname.slice(1) + '\', \'' + report.value + '\', \'Другое...\', \'Just click to report button\'); show(\'suc\', \'Репорт отправлен!\', \'Спасибо за бдительность!\');"><i class="fas fa-flag"></i></button>';
        });
    }, 15);
})();