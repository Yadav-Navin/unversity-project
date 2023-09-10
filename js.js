
        const open = document.getElementById("open");
        const close = document.getElementById("close");
        const ul = document.querySelector("ul");
        const text = document.querySelector(".text-box");
        let wdt_src = screen.width;

        function openNavbar(){
            ul.style.left="0";
            open.style.display="none";
            close.style.display="block";
            // text.style.opacity="0";
        }

        if (wdt_src >= 850){
            open.style.display="none";
        }
        
        function closeNavbar(){
            ul.style.left="-100%";
            open.style.display="block";
            close.style.display="none";
            // text.style.opacity="1";
            
        }
