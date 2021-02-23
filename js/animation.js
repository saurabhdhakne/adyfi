
    function initAnimationCursor(){

        document.getElementById('h11').style.border = "5px solid skyblue";

        document.getElementById('cursor2').style.top = "10vh";
        document.getElementById('cursor2').style.right = "45%";
        
        document.getElementById('cursor3').style.left = "7%";
        
        document.getElementById('cursor4').style.top = "65%";
        document.getElementById('cursor4').style.right = "15%";
        
        setTimeout(initAnimation,2000);

    } 
    initAnimationCursor();

    function initAnimation(){
        
        document.getElementById('h11').style.border = "5px solid salmon";

        document.getElementById('h12').style.top = "30vh";
        document.getElementById('h12').style.right = "35%";
        
        document.getElementById('h13').style.left = "28%";
        
        document.getElementById('h14').style.top = "47%";
        document.getElementById('h14').style.right = "30%";

        
        document.getElementById('cursor2').style.top = "30vh";
        document.getElementById('cursor2').style.right = "30%";
        

        document.getElementById('cursor3').style.left = "25%";
        
        document.getElementById('cursor4').style.right = "27%";
        document.getElementById('cursor4').style.top = "48%";
        
        setTimeout(initAnimation2,2000);
    }
    function initAnimation2(){

        document.getElementById('h11').style.border = "0px";


        document.getElementById('cursor1').style.top  = "20vh";
        document.getElementById('cursor1').style.left = "20%";
        
        
        document.getElementById('cursor2').style.top  = "20vh";
        document.getElementById('cursor2').style.right = "20%";

        document.getElementById('cursor3').style.top  = "70vh";
        document.getElementById('cursor3').style.left = "20%";
        
        document.getElementById('cursor4').style.top   = "70vh";
        document.getElementById('cursor4').style.right = "20%";
        

    } 