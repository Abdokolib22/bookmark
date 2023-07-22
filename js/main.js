var productname = document.getElementById('productname');

var productUrl = document.getElementById('productUrl');

var productContainer = [] ;

function addproduct() {


    var product = {
        name:productname.value,
        Url:productUrl.value
    }

    productContainer.push(product)

    displayProduct(productContainer)
}

function displayProduct(productContainer) {
    
    var list = ``;
    for (var i = 0 ; i < productContainer.length ; i++){
        list += ` <tr>
        <td>${productContainer[i].name }</td>
        <td>${productContainer[i]. Url}</td>
        
        <td><button class="btn btn-warning btn-sm"><i class="fa-regular fa-eye"></i></button></td>
        <td><button class="btn btn-danger btn-sm"><i class="fa-solid fa-trash-can"></i></button></td>
    </tr>
` 
}
    document.getElementById('tablebody').innerHTML = list
}