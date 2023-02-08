function addingEventListener() {
    function clickAlert() {
        alert("I was clicked!");
    }
    document.querySelector("input").addEventListener("click", clickAlert);
}