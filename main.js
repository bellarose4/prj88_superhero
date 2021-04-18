var canvas = new fabric.Canvas('myCanvas');
playerx=20;
playery=40;
blockimagewidth=30;
blockimageheight=30;
var playerobject="";
var blockimageobject="";
function playerupate(){
    fabric.Image.fromURL("player.png",function(Img){
        playerobject=Img;
        playerobject.scaleToWidth(150);
        playerobject.scaleToHeight(150);
        playerobject.set({
            top:playery,
            left:playerx
        });
        canvas.add(playerobject);
    });
}
function blockupdate(getimage){
    fabric.Image.fromURL(getimage,function(Img){
        blockimageobject=Img;
        blockimageobject.scaleToWidth(blockimagewidth);
        blockimageobject.scaleToHeight(blockimageheight);
        blockimageobject.set({
            top:playery,
            left:playerx
        });
        canvas.add(blockimageobject);
    });
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey == true && keyPressed == '80')
    {
        console.log("key pressed shift and letter p");
        blockimagewidth=blockimagewidth+10;
        blockimageheight=blockimageheight+10;
        document.getElementById("w").innerHTML=blockimagewidth;
        document.getElementById("h").innerHTML=blockimageheight;
    }
    if(e.shiftKey == true && keyPressed == '77')
    {
        console.log("key pressed shift and letter m");
        blockimagewidth=blockimagewidth-10;
        blockimageheight=blockimageheight-10;
        document.getElementById("w").innerHTML=blockimagewidth;
        document.getElementById("h").innerHTML=blockimageheight;
    }
    if(keyPressed=='38')
    {   
        up();
        console.log("up");
    }
    if(keyPressed=='40')
    {   
        down();
        console.log("down");
    }
    if(keyPressed=='37')
    {
        left();
        console.log("left");
    }
    if(keyPressed=='39')
    {
        right();
        console.log("right");
    }
    if(keyPressed=='70')
    {
        blockupdate('ironman_face.png');
        console.log("f");
    }
    if(keyPressed=='66')
    {
        blockupdate('spiderman_body.png');
        console.log("b");
    }
    if(keyPressed=='76')
    {
        blockupdate('hulk_legs.png');
        console.log("l");
    }
    if(keyPressed=='82')
    {
        blockupdate('thor_right_hand.png');
        console.log("r");
    }
    
    if(keyPressed=='72')
    {
        blockupdate('captain_america_left_hand.png');
        console.log("h");
    }
    
    function up()
    {
        if(playery>=0)
        {
            playery = playery - blockimageheight;
            console.log("block image height = " - blockimageheight);
            console.log("when Up arrow key is pressed, X = " + playerx +", Y = " + playery);
            canvas.remove(playerobject);
            playerupate();
        }
    }

    function down()
    {
        if(playery<=500)
        {
            playery = playery + blockimageheight;
            console.log("block image height = " + blockimageheight);
            console.log("when down arrow key is pressed, X = " + playerx +", Y = " + playery);
            canvas.remove(playerobject);
            playerupate();
        }
    }

    function left()
    {
        if(playerx>=0)
        {
            playerx = playerx - blockimagewidth;
            console.log("block image width = " + blockimagewidth);
            console.log("when left arrow key is pressed, X = " + playerx +", Y = " + playery);
            canvas.remove(playerobject);
            playerupate();
        }
    }

    function right()
    {
        if(playerx<=850)
        {
            playerx = playerx + blockimagewidth;
            console.log("block image width = " + blockimagewidth);
            console.log("when right arrow key is pressed, X = " + playerx +", Y = " + playery);
            canvas.remove(playerobject);
            playerupate();
        }
    }
}