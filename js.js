//string.trim()
function myClick1() {
    const str = "      No Oke        ";
    alert(str.trim());
}
//Array.isArray
function myClick2() {
    const array = [1,2,3,4,5];
    const a = document.getElementById("Test");
    a.innerHTML= Array.isArray(array);
}