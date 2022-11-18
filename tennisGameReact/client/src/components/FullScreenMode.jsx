import React, {useState, useEffect} from 'react'

const FullScreenMode = () => {



 const toggleFullScreen = () => {
var doc = window.document;
var docEl = doc.documentElement;

var requestFullScreen =
docEl.requestFullscreen ||
docEl.mozRequestFullScreen ||
docEl.webkitRequestFullScreen ||
docEl.msRequestFullscreen;
var cancelFullScreen =
doc.exitFullscreen ||
doc.mozCancelFullScreen ||
doc.webkitExitFullscreen ||
doc.msExitFullscreen;

if (
!doc.fullscreenElement &&
!doc.mozFullScreenElement &&
!doc.webkitFullscreenElement &&
!doc.msFullscreenElement
) {
requestFullScreen.call(docEl);
} else {
cancelFullScreen.call(doc);
}
}




return (
<div style = {{position: 'absolute', float: 'left', top: '90%', left: '76%', width:'140px', fontSize:'30px',display: 'flex', fontSize: '30px'}}>
<div id="menuButton" onClick = {toggleFullScreen}>⤡</div>
</div>
)


}

export default FullScreenMode