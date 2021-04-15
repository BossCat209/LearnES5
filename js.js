//string.trim()
function myClick1() {
    let str = "      No Oke        ";
    alert(str.trim());
}

//Array.isArray()
function myClick2() {
    let array = [1, 2, 3, 4, 5];
    let a = document.getElementById("Test");
    a.innerHTML = Array.isArray(array);
}

//Array.forEach()
function myClick3() {
    let array = [6, 9, 69, 96, 96.69];
    let text = "";
    array.forEach(myText);
    document.getElementById("Test1").innerHTML = text;
    function myText(value) {
        text = text + value + " ";
    }
}

//Array.map()
function myClick4() {
    let array = [1,11,111,23,45];
    let array1 = array.map(myArray);
    document.getElementById("Test2").innerHTML = array1;
    function myArray(value) {
        console.log(value);
        return value + 2 + " ";
    }
}
