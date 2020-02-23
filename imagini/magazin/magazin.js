function GetProduse() {
    var VProduse = document.querySelectorAll(".produs_magazin");


    if (document.getElementById("produs"))
        document.getElementById("produs").remove();

    return VProduse;
}

window.onload = function () {

    var n =  new Date();
    var y = n.getFullYear();
    var m = n.getMonth() + 1;
    var d = n.getDate();
    document.getElementById("ora").innerHTML = d + "/" + m + "/" + y;

    var ok = false;
    if(ok == false){
    var asdfd = document.getElementById("tem");
    asdfd.onclick = function () {
        var rad1 = document.createElement("input");
        var rad2 = document.createElement("input");

        rad1.type = "radio";
        rad2.type = "radio";

        rad1.name = "tema";
        rad2.name = "tema";

        rad1.value = "0";
        rad2.value = "1";

        rad1.checked = true;

        document.getElementById("tema").insertBefore(rad1,asdfd);
        document.getElementById("tema").insertBefore(rad2,asdfd);

        rad2.onclick = function()
        {
            setTimeout(function(){ alert("Tema a fost schimbata"); }, 1500);
            document.body.style.backgroundColor = "black";
            document.body.style.color = "#F0F0F0";
        }

        rad1.onclick = function()
        {
            setTimeout(function(){ alert("Tema a fost schimbata"); }, 1500);
            document.body.style.backgroundColor = "#F0F0F0";
        }

    }
    ok = true;
    }
    else
    {
        ok = false;
    }

    var BoolButton = false;
    this.document.getElementById("unelte").children[0].onclick = function () {

        if (BoolButton == false) {

            ///creearea celor 3 butoane de cautare
            var butoane_sortare = document.createElement("div");

            var cautare_nume = document.createElement("BUTTON");
            cautare_nume.id = "cautare_nume";
            cautare_nume.innerHTML = "ORDONARE NUME";
            butoane_sortare.appendChild(cautare_nume);

            var cautare_pret = document.createElement("BUTTON");
            cautare_pret.id = "cautare_pret";
            cautare_pret.innerHTML = "ORDONARE PRET";
            butoane_sortare.appendChild(cautare_pret);

            var cautare_pop = document.createElement("BUTTON");
            cautare_pop.id = "cautare_pop";
            cautare_pop.innerHTML = "ORDONARE POPULARITATE";
            butoane_sortare.appendChild(cautare_pop);



            //range
            var cont_range = document.createElement("div");
            cont_range.id = "container_range";
            cont_range.appendChild(document.createTextNode("Cautare in range de pret"));
            var rangeMin = document.createElement("input");
            rangeMin.id = "rMin";
            rangeMin.type = "range";
            rangeMin.name = "pret";
            rangeMin.min = "10";
            rangeMin.max = "160";
            cont_range.appendChild(rangeMin);
            var label = document.createElement("label");
            label.innerHTML = "MIN";
            cont_range.appendChild(label);

            var rangeMax = document.createElement("input");
            rangeMax.id = "rMax";
            rangeMax.type = "range";
            rangeMax.name = "pret";
            rangeMax.min = "10";
            rangeMax.max = "160";
            cont_range.appendChild(rangeMax);
            var label = document.createElement("label");
            label.innerHTML = "MAX";
            cont_range.appendChild(label);

            var buton_range = document.createElement("button");
            buton_range.id = "cauta_range";
            buton_range.innerHTML = "OK!";
            cont_range.appendChild(buton_range);
            butoane_sortare.appendChild(cont_range);

            /*
            var cautare_pretpre = document.createElement("button");
            cautare_pretpre.id = "cautare_pretpre";
            cautare_pretpre.innerHTML = "CAUTARE PRESTABILITA";
            butoane_sortare.appendChild(cautare_pretpre);
            */
            document.getElementById("unelte").appendChild(butoane_sortare);


            //functiile fiecarui buton
            //functie buton sortare dupa nume
            cautare_nume.onclick = function () {
                var ListaNume = GetProduse();

                var vN = Array.prototype.slice.call(ListaNume);
                vN.sort(function (a, b) {
                    return (a.children[0].innerHTML).localeCompare(b.children[0].innerHTML)
                });


                for (el of vN)
                    document.getElementById("serv").appendChild(el);
            }

            //function buton sortare dupa pret
            cautare_pret.onclick = function () {
                var ListaPret = GetProduse();

                var vP = Array.prototype.slice.call(ListaPret);
                vP.sort(function (a, b) {
                    return parseInt(a.children[1].innerHTML.split(' ')[0]) - parseInt(b.children[1].innerHTML.split(' ')[0]);
                });


                for (el of vP)
                    document.getElementById("serv").appendChild(el);
            }

            //function buton sortare dupa popularitate
            cautare_pop.onclick = function () {
                var ListaPop = GetProduse();

                var vPp = Array.prototype.slice.call(ListaPop);

                //for(el of vPp)
                //window.alert(parseFloat(el.children[2].innerHTML.split("/")[0]));

                vPp.sort(function (a, b) {
                    return parseFloat(b.children[2].innerHTML.split('/')[0]) - parseFloat(a.children[2].innerHTML.split('/')[0]);
                });

                for (el of vPp)
                    document.getElementById("serv").appendChild(el);
            }

            
            /*
            var caut_pres = false;
            cautare_pretpre.onclick = function()
            {
                if(caut_pres == false){
                var rad1 = document.createElement("input");
                var rad2 = document.createElement("input");
                var rad3 = document.createElement("input");

                rad1.type = "radio";
                rad2.type = "radio";
                rad3.type = "radio";

                rad1.name = "pret";
                rad2.name = "pret";
                rad3.name = "pret";

                rad1.value = "50";
                rad2.value = "100";
                rad3.value = "150";

                var ex1 = document.createElement("label");
                ex1.innerHTML = "<50lei";
                ex1.for = "50";

                var ex2 = document.createElement("label");
                ex2.innerHTML = "<100lei";
                ex2.for = "100";

                var ex3 = document.createElement("label");
                ex3.innerHTML = "<150lei";
                ex3.for = "150";

               

                var cont = document.createElement("div");
                cont.id = "asd";

                cont.appendChild(rad1);
                cont.appendChild(ex1);
                cont.appendChild(document.createElement("br"));
                cont.appendChild(rad2);
                cont.appendChild(ex2);
                cont.appendChild(document.createElement("br"));
                cont.appendChild(rad3);
                cont.appendChild(ex3);
                cont.appendChild(document.createElement("br"));

                var subm = document.createElement("button");
                subm.innerHTML = "OK!";
                subm.style.width = "50px";
                subm.style.height = "30px";

                cont.appendChild(subm);

                subm.onclick = function()
                {
                    var Lista = GetProduse();

                    var vL = Array.prototype.slice.call(Lista);
                    
                    if(rad1.checked == true)
                    {
                        for (el of vL)
                            if(el.parseInt(a.children[1].innerHTML.split(' ')[0]) <= 50)
                                document.getElementById("serv").appendChild(el);
                    }

                
                    if(rad2.checked == true)
                    {
                        for (el of vL)
                            if(el.parseInt(a.children[1].innerHTML.split(' ')[0]) <= 100)
                                document.getElementById("serv").appendChild(el);
                    }

                    if(rad3.checked == true)
                    {
                        for (el of vL)
                            if(el.parseInt(a.children[1].innerHTML.split(' ')[0]) <= 150)
                                document.getElementById("serv").appendChild(el);
                    }
                    
                }

                butoane_sortare.appendChild(cont);

                

                caut_pres = true;
                }
                else
                {
                    document.getElementById("asd").remove();
                    caut_pres = false;
                }
            }
            */

            //cautare in range de pret
            buton_range.onclick = function () {
                var minim = rangeMin.value;
                var maxim = rangeMax.value;

                var ListaRange = GetProduse();

                var vR = Array.prototype.slice.call(ListaRange);

                for (el of vR) {
                    if (parseInt(el.children[1].innerHTML.split(' ')[0]) <= maxim && parseInt(el.children[1].innerHTML.split(' ')[0]) >= minim) {
                        document.getElementById("serv").appendChild(el);
                    }
                }
            }

            BoolButton = true;
        }
        else {
            var list = document.querySelectorAll("#unelte div");

            for (let el of list)
                el.remove();

            BoolButton = false;
        }
    }

    document.getElementById("reset").onclick = function () {
        window.location = location;
    }




    for (let el of document.getElementsByClassName("produs_magazin")) {
        el.onmouseenter = function () {
            var divE = document.createElement("aside");
            divE.innerText = "testetstest";
            divE.style.position = "absolute";
            divE.style.display = "block";
            divE.style.width = "100px";
            divE.style.height = "60px";
            divE.style.border = "1px solid black"
            divE.style.backgroundColor = "#e27e36";

            this.onmousemove = function (e) {
                var x = e.pageX;
                var y = e.pageY;

                divE.style.left = x + "px";
                divE.style.top = y - 970 + "px";
            }

            this.parentNode.appendChild(divE);
        }

        el.onmouseleave = function () {
            this.parentNode.removeChild(this.parentNode.lastChild);
        }


        el.onclick = function () {
            var divcos = document.createElement("div");
            divcos.style.border = "1px solid #e27e36";
            divcos.style.width = "200px";
            divcos.style.textAlign = "center";
            var p1 = document.createElement("p");
            var p2 = document.createElement("p");
            p1.innerHTML = el.children[0].innerHTML;
            p2.innerHTML = el.children[1].innerHTML;

            divcos.appendChild(p1);
            divcos.appendChild(p2);

            document.getElementById("cos").appendChild(divcos);
        }
    }

    this.document.onkeydown = function () {
        if (event.key == "s" && event.altKey == true) {
            var ListaNume = GetProduse();

            var vN = Array.prototype.slice.call(ListaNume);
            vN.sort(function (a, b) {
                return (a.children[0].innerHTML).localeCompare(b.children[0].innerHTML)
            });


            for (el of vN)
                document.getElementById("serv").appendChild(el);
        }
    }

    var container = document.getElementById("container");
    var elem = document.getElementById("animatie");
    var id = setInterval(frame, 15);
    var maxDistToTravel = container.offsetWidth - elem.offsetWidth; // container width - red box width
    var pos = 0;
    var end = maxDistToTravel;
    var direction = 1;
    function frame() {
        if (pos === end) {
            direction *= -1; // reverses current direction
            end = Math.abs(maxDistToTravel - end);
        }
        pos += direction;
        elem.style.left = pos + "px";
    }


}
