window.onload = function()
{
    var header = document.createElement("h2");
    header.innerHTML = "Review Site";

    document.body.appendChild(header);

    var q1 = document.createElement("p");
    q1.innerHTML = "Lasa o parere:";
    this.document.body.appendChild(q1);

    var texta = document.createElement("textarea");
    texta.innerHTML = "Lasa un mesaj.";
    texta.rows = "4";
    texta.cols = "50";
    this.document.body.appendChild(texta);

    var q2 = this.document.createElement("p");
    q2.innerHTML = "Va place aspectul site-ului?";
    this.document.body.appendChild(q2);

    var but1 = this.document.createElement("input");
    but1.type = "checkbox";
    but1.value = "true";

    var but2 = this.document.createElement("input");
    but2.type = "checkbox";
    but2.value = "false";


    this.document.body.appendChild(but1);
    this.document.body.appendChild(this.document.createTextNode("DA"));
    this.document.body.appendChild(but2);
    this.document.body.appendChild(this.document.createTextNode("NU"));

    but1.onchange = function()
    {
        but2.checked = !but1.checked;
        but1.checked = !but2.checked;
    }

    but2.onchange = function()
    {
        but1.checked = !but2.checked;
        but2.checked = !but1.checked;
    }


    var q3 = this.document.createElement("p");
    q3.innerHTML = "Ce nota ai da site-ului?";
    this.document.body.appendChild(q3);

    var sel = this.document.createElement("select");
    var op1 = this.document.createElement("option");
    op1.value = "1";
    op1.innerHTML = "1";
    var op2 = this.document.createElement("option");
    op2.value = "2";
    op2.innerHTML = "2";
    var op3 = this.document.createElement("option");
    op3.value = "3";
    op3.innerHTML = "3";
    var op4 = this.document.createElement("option");
    op4.value = "4";
    op4.innerHTML = "4";
    var op5 = this.document.createElement("option");
    op5.value = "5";
    op5.innerHTML = "5";
    var op6 = this.document.createElement("option");
    op6.value = "6";
    op6.innerHTML = "6";
    var op7 = this.document.createElement("option");
    op7.value = "7";
    op7.innerHTML = "7";
    var op8 = this.document.createElement("option");
    op8.value = "8";
    op8.innerHTML = "8";
    var op9 = this.document.createElement("option");
    op9.value = "9";
    op9.innerHTML = "9";
    var op10 = this.document.createElement("option");
    op10.value = "10";
    op10.innerHTML = "10";

    sel.appendChild(op1);
    sel.appendChild(op2);
    sel.appendChild(op3);
    sel.appendChild(op4);
    sel.appendChild(op5);
    sel.appendChild(op6);
    sel.appendChild(op7);
    sel.appendChild(op8);
    sel.appendChild(op9);
    sel.appendChild(op10);


    this.document.body.appendChild(sel);
}