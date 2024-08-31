document.addEventListener("DOMContentLoaded", function(){
    var input1 = document.getElementById("user");
    var input2 = document.getElementById("password");
    var btn = document.getElementById("submit");

    input1.addEventListener("input", f1);
    input2.addEventListener("input", f1);

    function f1() {
        if (input1.value.trim() !== "" && input2.value.trim() !== "") {
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

function redirect(){
    window.location.href = '/s';
}



