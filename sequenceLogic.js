var animationStartEvents =  ["webkitAnimationStart", "animationStart"];
var animationEndEvents = ["webkitAnimationEnd", "animationend"];
var sequence = document.getElementsByClassName("smokeContainer")[0];
var animation;
function hideSequence (event) {
    if (sequence === event.target) {
        document.getElementsByTagName("main")[0].style.display = "block";
        event.target.removeEventListener(event.type, arguments.callee);
    }
}
for (animation of animationStartEvents) sequence.addEventListener(animation, hideSequence);

// Sequence optimisation via will-change
var allSmokeText = Array.prototype.slice.call(document.querySelectorAll(".smokeText>h2"));
var willChange = "transform, filter, opacity, text-shadow";
allSmokeText[0].style.willChange = willChange;
var node;
for (animation of animationStartEvents) {
    for (var key in allSmokeText.slice(0, allSmokeText.length - 2)) {
        var index = Number(key);
        if (allSmokeText.hasOwnProperty(index) && typeof allSmokeText[index+1] !== "undefined") {
            allSmokeText[index].addEventListener(animation, function () {
                allSmokeText[index+1].style.willChange = willChange;
            }, {once: true})
        }
    }
}
for (animation of animationEndEvents) {
    for (node of allSmokeText) {
        node.addEventListener(animation, function() {
            node.style.willChange = "auto"
        }, {once: true});
    }
}

