
        function log(){
        var username = document.getElementById("int1").value;
        var password = document.getElementById("int2").value;

        var uname = "admin";
        var pword = "1234";

        if(username==uname && password==pword){
            window.alert("login successfully");
        } else {
            window.alert("login failed");
        }
        document.body.style.overflow = "hidden";
    }