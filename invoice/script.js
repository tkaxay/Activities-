var counter = 2

function chgcurr(){
    var s1 = document.getElementById("currency");
    var s2 = document.getElementById("total1");
    s2.innerHTML = "";
    if (s1.value == "Rupee") {
        s2.innerHTML = "Total (Rupee)"
        return 1;
    }else if (s1.value == "Dollar") {
        s2.innerHTML = "Total (Dollar)"
        return 74;
    }else if (s1.value == "Pound") {
        s2.innerHTML = "Total (Pound)"
        return 99;
    }else if (s1.value == "Yen") {
        s2.innerHTML = "Total (Yen)"
        return 0.6;
    }
}

function cloneItem(idToBeCloned) {
    buttonId = idToBeCloned;

    // find parent row div id
    idToBeCloned = "item" + buttonId.substr(11);

    const node = document.getElementById(idToBeCloned);
    const clone = node.cloneNode(true);

    // set parent's id
    clone.id = "item" + counter;

    // set itemName's id
    const ItemNameId = "ItemName" + buttonId.substr(11);
    const select1 = clone.querySelector("#" + CSS.escape(ItemNameId));
    select1.id = "ItemName" + counter;

    // set itemQt's id
    const ItemQtId = "ItemQt" + buttonId.substr(11);
    const select2 = clone.querySelector("#" + CSS.escape(ItemQtId));
    select2.id = "ItemQt" + counter;

    // set itemRate's id
    const ItemRateId = "ItemRate" + buttonId.substr(11);
    const select3 = clone.querySelector("#" + CSS.escape(ItemRateId));
    select3.id = "ItemRate" + counter;

    // set itemAmt's id
    const ItemAmtId = "ItemAmt" + buttonId.substr(11);
    const select4 = clone.querySelector("#" + CSS.escape(ItemAmtId));
    select4.id = "ItemAmt" + counter;

    // set button's id
    const select6 = clone.querySelector("#" + CSS.escape(buttonId));
    select6.id = "cloneButton" + counter;

    document.getElementById("items").appendChild(clone);
    counter++;
    calculateSubTotal();
}

function addRow() {
    
    var node =
        '<div class="row" id="item' +
        counter +
        '">' +
        '<div class="col-6">' +
        '<div class="mb-1">' +
        "<textarea" +
        ' class="form-control"' +
        ' id="ItemName' +
        counter +
        '"' +
        ' placeholder="Items you are selling"' +
        ' rows="3"' +
        "></textarea>" +
        "</div>" +
        "</div>" +
        '<div class="col-2 mx-0 px-1">' +
        "<input" +
        ' type="text"' +
        ' class="form-control text-end"' +
        ' id="ItemQt' +
        counter +
        '"' +
        ' value="0"' +
        ' onchange="calculateAmtQt(this.id)"' +
        "/>" +
        "</div>" +
        '<div class="col-2 mx-0 px-1">' +
        "<input" +
        ' type="text"' +
        ' class="form-control text-end"' +
        ' id="ItemRate' +
        counter +
        '"' +
        ' value="0"' +
        ' onchange="calculateAmtRate(this.id)"' +
        "/>" +
        "</div>" +
        '<div class="col-2 px-2 mx-0">' +
        "<input" +
        ' type="text"' +
        ' id="ItemAmt' +
        counter +
        '"' +
        ' class="form-control text-end"' +
        ' value="0"' +
        " readonly" +
        "/>" +
        "</div>" +
        '<div class="d-grid gap-2 d-md-block my-0">' +
        "<button" +
        ' class="btn mb-4 px-3 py-2"' +
        ' style="background-color: rgb(231, 231, 231); margin-left: 20px;"' +
        ' type="button"' +
        ' id="cloneButton' +
        counter +
        '"' +
        ' onclick="cloneItem(this.id)"' +
        ">" +
        '<i class="fa fa-copy"></i>' +
        "</button>" +
        "</div>" +
        '<div class="d-grid gap-2 d-md-block my-0">' +
        "<button" +
        ' class="btn mb-4 px-3 py-2"' +
        ' style="background-color: rgb(231, 231, 231); margin-left: 20px;"' +
        ' type="button"' +
        ' id="deleteButton' +
        counter +
        '"' +
        ' onclick="deleteItem(this.id)"' +
        ">" +
        '<i class="fa fa-trash"></i>' +
        "</button>" +
        "</div>" +

        "</div>";

    let domNode = new DOMParser().parseFromString(node, "text/html");
    document.getElementById("items").appendChild(domNode.documentElement);
    // update counter
    counter++;
}

function calculateTotal() {
    let subTotal = parseFloat(document.getElementById("sub_total").innerHTML);
    let vat = parseFloat(document.getElementById("withtax").innerHTML);
    document.getElementById("total2").innerHTML = vat + subTotal;
    document.getElementById("grandtotal").value = vat + subTotal;
}


function calculateSubTotal() {
    // run for every element
    let sum = 0;
    for (let i = 1; i < counter; i++) {
        try {
            sum += parseFloat(document.getElementById("ItemAmt" + i).value * chgcurr());
        } catch (err) {
            // element with id may have been deleted
            console.log(err.message);
        }
    }
    document.getElementById("sub_total").innerHTML = sum;
    calculateVAT();
}


function calculateVAT() {
    let subTotal = parseFloat(document.getElementById("sub_total").innerHTML);
    let tax = parseFloat(document.getElementById("taxval").value);
    console.log(tax);
    document.getElementById("withtax").innerHTML = subTotal * (tax / 100);
    calculateTotal();
}


function calculateAmt(id) {
    var amt = document.getElementById("ItemAmt" + id);
    var rate = document.getElementById("ItemRate" + id);
    var qt = document.getElementById("ItemQt" + id);
    amt.value = rate.value * qt.value;
    calculateSubTotal();
}

function calculateAmtRate(id) {
    // extract id number
    id = id.substr(8);
    calculateAmt(id);
}

function calculateAmtQt(id) {
    // extract id number
    id = id.substr(6);
    calculateAmt(id);
}


function save() {
    var element = document.getElementById("invoice");
    var opt = {
        margin: 0.2,
        filename: 'myfile.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().from(invoice).set(opt).save("output.pdf");
}

function deleteItem(id){
    console.log(id)
    var ch = id.charAt(id.length - 1)
    console.log(ch)
    var div = document.getElementById('item'+ch);
    div.parentNode.removeChild(div);
    calculateSubTotal();
}