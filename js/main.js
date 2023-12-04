/* main.js - Veebilehe peamine Javascript fail, mille eesmärk on võimaldada mobiiliseadmete küljepaneeli kuvamist
 * autor - Karl-Mihkel Ott
 */

// MÄRKUS: Mulle meeldib jQuery ja seega kasutasin antud projekti puhul seda. Sama funktsionaalsust saaks teostada ka puhtas Javascriptis.

// Kui hamburger-btn id'ga elementi vajutatakse, siis muuda mobile-overlay nähtavaks 
$("#hamburger-btn").on('click', () => {
    $('#mobile-overlay').css('display', 'block');
});

// Kui overlay-close-btn id'ga elementi vajutatakse, siis muuda mobile-overlay mitte nähtavaks 
$("#overlay-close-btn").on('click', () => {
    $('#mobile-overlay').css('display', 'none');
});