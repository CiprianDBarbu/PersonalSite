function GetProduse()
{
    var VProduse = document.querySelectorAll(".produs_magazin");

    if(document.getElementById("servicii") != null)
        document.getElementById("servicii").remove();
    if(document.getElementById("produse"))
        document.getElementById("produse").remove();

    return VProduse;
}

window.onload = function()
{
    var BoolButton = false;
    this.document.getElementById("unelte").children[0].onclick = function()
    {

        if(BoolButton == false)
        {

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
            rangeMin.min = "15";
            rangeMin.max = "150";
            cont_range.appendChild(rangeMin);
            var label = document.createElement("label");
            label.innerHTML = "MIN";
            cont_range.appendChild(label);

            var rangeMax = document.createElement("input");
            rangeMax.id = "rMax";
            rangeMax.type = "range";
            rangeMax.name = "pret";
            rangeMax.min = "15";
            rangeMax.max = "150";
            cont_range.appendChild(rangeMax);
            var label = document.createElement("label");
            label.innerHTML = "MAX";
            cont_range.appendChild(label);

            var buton_range = document.createElement("button");
            buton_range.id = "cauta_range";
            buton_range.innerHTML = "OK!";
            cont_range.appendChild(buton_range);
            butoane_sortare.appendChild(cont_range);

            document.getElementById("unelte").appendChild(butoane_sortare);


            //functiile fiecarui buton
            //functie buton sortare dupa nume
            cautare_nume.onclick = function()
            {
                var ListaNume = GetProduse(); 
                
                var vN = Array.prototype.slice.call(ListaNume);
                vN.sort(function(a,b)
                {
                    return (a.children[0].innerHTML).localeCompare(b.children[0].innerHTML)
                });
        

                for(el of vN)
                document.getElementsByTagName("main")[0].appendChild(el);
            }

            //function buton sortare dupa pret
            cautare_pret.onclick = function()
            {
                var ListaPret = GetProduse();

                var vP = Array.prototype.slice.call(ListaPret);
                vP.sort(function(a,b)
                {
                    return parseInt(a.children[1].innerHTML.split(' ')[0]) - parseInt(b.children[1].innerHTML.split(' ')[0]);
                });


                for(el of vP)
                document.getElementsByTagName("main")[0].appendChild(el);
            }

            //function buton sortare dupa popularitate
            cautare_pop.onclick = function()
            {
                var ListaPop = GetProduse();

                var vPp = Array.prototype.slice.call(ListaPop);

                //for(el of vPp)
                //window.alert(parseFloat(el.children[2].innerHTML.split("/")[0]));

                vPp.sort(function(a,b)
                {
                    return parseFloat(b.children[2].innerHTML.split('/')[0]) - parseFloat(a.children[2].innerHTML.split('/')[0]);
                });

                for(el of vPp)
                document.getElementsByTagName("main")[0].appendChild(el);
            }


            BoolButton = true;
        }
        else
        {
            var list = document.querySelectorAll("#unelte div");
            
            for(let el of list)
                el.remove();

            BoolButton = false;
        }
    }

    document.getElementById("reset").onclick = function()
    {
        window.location = location;
    }
}

