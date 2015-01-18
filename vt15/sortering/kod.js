
var talen = [];
talen[0] = 1;
talen[1] = 5;
talen[2] = 3;
talen[3] = 1;
talen[4] = 8;
talen[5] = 10;
talen[6] = 2;

skrivUt(talen);

bubbelSortera(talen);

skrivUt(talen);

alert("hittat på " + mySeek(5,talen));

// Blanda i fel ordning igen.....
talen[0] = 1;
talen[1] = 5;
talen[2] = 3;
talen[3] = 1;
talen[4] = 8;
talen[5] = 10;
talen[6] = 2;

skrivUt(talen);

infogSortera(talen);



skrivUt(talen);

// Många tal...
var mangaTal = [];
for (var i = 0; i < 100; i++)
{
    mangaTal[i] = parseInt(Math.random()*100);
}
skrivUt(mangaTal);
infogSortera(mangaTal);
skrivUt(mangaTal);

function skrivUt(tal)
{
    var text = "";
    for (var i = 0; i < tal.length; i++)
    {
        text = text + tal[i] + " ";
    }

    alert(text);
}

function bubbelSortera(tal)
{
    var antal = tal.length;
    for (var i = 0; i < antal-1; i++)
    {
        for (var j = 0; j < antal - 1 - i; j++)
        {
            if (tal[j] > tal[j+1])
            {
                var temp = tal[j];
                tal[j] = tal[j+1];
                tal[j+1] = temp;
            }
        }
    }
}

function infogSortera(tal)
{
    var antal = tal.length;
    
    for (var i = 1; i < antal; i++)
    {
        var temp = tal[i];
        for (var j = i -1; j >=0 && temp  < tal[j]; j--)
        {
            tal[j+1] = tal[j];
        }
        tal[j+1] = temp;
            
    }
    
    
}

// Sökfunktion. Det man söker är key, det man söker i är tal
function mySeek(key, tal)
{
    var start = 0;
    var end = tal.length - 1;
    while (start <= end) 
    {
        var mitten = (start + end) / 2;
        if (key == tal[mitten]) 
        {
            return mitten;
        }
        if (key < tal[mitten]) 
        {
            end = mitten - 1;
        } 
        else 
        {
            start = mitten + 1;
        }
    }
    return -1;      // om inte talet finns med
}


