document.addEventListener("DOMContentLoaded", function(){

    var input1 = document.getElementById("first");
    var input2 = document.getElementById("last");
    var input3 = document.getElementById("gender");
    var input4 = document.getElementById("email");
    var input5 = document.getElementById("user");
    var input6 = document.getElementById("password");

    var btn = document.getElementById("submit");

    input1.addEventListener("input", f1);
    input2.addEventListener("input", f1);
    input3.addEventListener("input", f1);
    input4.addEventListener("input", f1);
    input5.addEventListener("input", f1);
    input6.addEventListener("input", f1);

    function f1() {
        if (input1.value.trim() !== "" && input2.value.trim() !== "" && input3.value.trim() !== "" && input4.value.trim() !== "" && input5.value.trim() !== "" && input6.value.trim() !== "") {
            btn.removeAttribute("disabled");
        }
        else {
            btn.setAttribute("disabled",true);
        }
    }

    // btn.addEventListener("click", f2);

    // function f2() {
    //     console.log("The first Input:" + input1.value);
    //     console.log("The second Input:" + input2.value);

    // }

});



