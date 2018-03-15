// #6 console log to check external script is linked.
console.log('app is alive');

// #6 Give a #smile, add a piece of code that hides the emojis menu initially.


// #6 switching CHANNELS
function switchChannel(channelName) {
  console.log('Tuning into channel', channelName);
  // #6 change channel name on the app-bar using the created p element with id channel-name
  document.getElementById('channel-name').innerHTML=channelName;
  // #6 update channel name location and link on the app-bar using the created a element with id channel-location
  document.getElementById('channel-location').innerHTML="upgrading.never.helps";
  document.getElementById('channel-location').href="http://w3w.co/upgrading.never.helps";
  starUnfilled();
  // #6 Switching channels Pt. II
  $('#channels li').removeClass('selected');
  $('#channels li:contains(' + channelName + ')').addClass('selected');
}
// #6 create function that changes a star filled to unfilled using jquery
function starUnfilled() {
  $('#channel-star').attr('src', 'http://ip.lfe.mw.tum.de/sections/star-o.png');
}
// #6 create function that changes a star unfilled to filled using jquery
function starFilled() {
  $('#channel-star').attr('src', 'http://ip.lfe.mw.tum.de/sections/star.png');
}
// #6 Tapping tabs, create a function to change the tab buttons
function selectTab(tabId) {
  $('#tab-bar button').removeClass('selected');
  $('#' + tabId).addClass('selected');
  console.log('Changing to tab', tabId);
}
// #6 Give a #smile
function toggleEmojis () {
  // #6 didnt use the .show() function since .toggle() handles it already.
  $('#emojis').toggle();
}
