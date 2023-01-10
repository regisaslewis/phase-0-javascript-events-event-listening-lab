function addingEventListener() {
    const input = document.getElementById("button");
    function alertOnClick() {
        alert("I was clicked!");
    };
    input.addEventListener("click", alertOnClick);  
};