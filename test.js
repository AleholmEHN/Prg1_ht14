function testarJS()
{
    document.write("Test");
}

    function tarning()
    {
    // En simulerad tärning
    text(100, 100, 40, "TEST");
    tal = random(6) + 1;
    
    rectangle(30, 30,140, 140,"blue");
    
    if (tal == 1 || tal == 3 || tal == 5)
    {
        circle(100, 100, 10, "black");
        if (tal == 3 || tal == 5)
        {
            circle(50, 150, 10, "black");
            circle(150, 50, 10, "black");
            if (tal == 5)
            {
                circle(50, 50, 10, "black");
                circle(150, 150,10, "black");
            }
        }
    }
    else    // Alltså 2, 4 eller 6
    {
        circle(50, 150, 10, "black");
        circle(150, 50, 10, "black");
        if (tal == 4 || tal == 6)
        {
            circle(50, 50, 10, "black");
            circle(150, 150,10, "black");
            if (tal == 6)
            {
                circle(50, 100, 10, "black");
                circle(150, 100,10, "black");
            }
        }
    }
        
    }