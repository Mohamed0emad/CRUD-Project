
var proudctName = document.getElementById("proudctname");
var proudctprice = document.getElementById("proudctprice");
var proudctCategory = document.getElementById("Productcategory");
var proudctDescription = document.getElementById("proudctdesc");


var productcontainer;
if (localStorage.getItem("ProductList") == null) {
    productcontainer = [];
}
else {
    productcontainer = JSON.parse(localStorage.getItem("ProductList"));
    //JSON.parse دي عكس بترجعه array of object
    displayproduct();
}
// add product in my CRUD

function addproduct() {
    if (checkInput() == true) {
        var product = {           // object
            Name: proudctName.value,
            Price: proudctprice.value,
            Cat: proudctCategory.value,
            Desc: proudctDescription.value,
        }
        productcontainer.push(product);         //arrayof object
        localStorage.setItem("ProductList", JSON.stringify(productcontainer));
        //setItem بتمسح القديم وبتحط الجديد دا لما بعمل ريفرش 
    }
    else {
        window.alert("sorry Just complete all data")
    }
    clearForm();
}

// clear all data from input to enter new data

function clearForm() {
    proudctName.value = "";
    proudctprice.value = "";
    proudctCategory.value = "";
    proudctDescription.value = "";
}

// push or add data in my CURD

function displayproduct() {
    var group = ``;           //`` => backtic 
    for (var i = 0; i < productcontainer.length; i++) {
        group += `<tr>
        <td>${i}</td>
        <td>${productcontainer[i].Name}</td>
        <td>${productcontainer[i].Price}</td>
        <td>${productcontainer[i].Category}</td>
        <td>${productcontainer[i].Desc}</td>
        <td><button class="btn btn-outline-warning">updata</button></td>
        <td><button onclick="deletproduct(${i})" class=" btn btn-outline-danger">delete</button></td>
        </tr>`;
    }
    document.getElementById("tablebody").innerHTML = group;
}

// check if data is complete or not

function checkInput() {
    if (proudctName.value != "" && proudctprice.value != "" && proudctCategory.value != "" && proudctdesc.value != "") {
        return true;
    }
    else {
        return false;
    }
}

function deletproduct(index) {
    productcontainer.splice(index, 1)
    localStorage.setItem("ProductList", JSON.stringify(productcontainer));  // باخد array الجديد واحطه ف local storage
    displayproduct();
}

function searchproduct(searchterm) {
    var total = ``;
    for (var i = 0; i < productcontainer.length; i++) {
        if (productcontainer[i].Name.tolowercase().includes(searchterm.tolowercase()) == true) {
            total += `<tr>
        <td>${i}</td>
        <td>${productcontainer[i].Name}</td>
        <td>${productcontainer[i].Price}</td>
        <td>${productcontainer[i].Category}</td>
        <td>${productcontainer[i].Desc}</td>
        <td><button class="btn btn-outline-warning">updata</button></td>
        <td><button onclick="deletproduct(${i})" class=" btn btn-outline-danger">delete</button></td>
        </tr>`;
        }
        else {
            console.log("not Exist");
        }
    }
    document.getElementById("tablebody").innerHTML = group;
}








// localStorage.setItem("CRUD","Project");
// localStorage.getItem("CRUD");

// localStorage.clear();
// localStorage.length;
// localStorage.removeItem("CRUD");








// // // declartion function
// // function sum() {
// // }

// // // expression function
// // var sum = function () {
// // }
// // !function sum() {
// // }

// // function getAvg (x,y){
// //     var result=x+y;
// //     var result2=result/2;
// //     console.log(result2);
// // }
// // getAvg(5,5)



// function foo() {
//     return bar;
//     function bar() {
//         return 3;
//     }
//     var bar = function () {
//         return 8;
//     }
// }
// alert(foo());