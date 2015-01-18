
// Skapa en array med flera tal i. Osorterat
var talen = [];
talen[0] = 1;
talen[1] = 5;
talen[2] = 3;
talen[3] = 1;
talen[4] = 8;
talen[5] = 10;
talen[6] = 2;

skrivUt(talen);     // Skriv ut
infogSortera(talen);        // Sortera
skrivUt(talen);     // Skriv ut


// Blanda i fel ordning igen.....
talen[0] = 1;
talen[1] = 5;
talen[2] = 3;
talen[3] = 1;
talen[4] = 8;
talen[5] = 10;
talen[6] = 2;

skrivUt(talen);     // Skriv ut
bubbelSortera(talen);       // Sortera
skrivUt(talen);

// Slumpa många tal...
var mangaTal = [];
for (var i = 0; i < 100; i++)
{
    mangaTal[i] = parseInt(Math.random()*100);
}

skrivUt(mangaTal);
infogSortera(mangaTal);
skrivUt(mangaTal);

// En funktion som skriver ut tal i en Alert-box
function skrivUt(tal)
{
    var text = "";
    for (var i = 0; i < tal.length; i++)
    {
        text = text + tal[i] + " ";
    }

    alert(text);
}

// Skelett för bubbelsortering
function bubbelSortera(tal)
{


}

// Skelett för infogande sortering
function infogSortera(tal)
{
    
    
}


