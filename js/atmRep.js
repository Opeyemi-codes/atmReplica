
var users = [
    
     {
        fname : "john",
        lname : "chris",
        Email : "johnchris@yahoo.com",
        pin : 1111,
    },
     {
        fname : "james",
        lname : "tabor",
        Email : "jamestabor@yahoo.com",
        pin : 2222,
    },
     {
        fname : "ben",
        lname : "gatewat",
        Email : "bengate@gmail.com",
        pin : 3333,
    },
     {
        fname : "kemi",
        lname : "olayemi",
        Email : "kemiola@microsoft.com",
        pin : 4444,
    },
    {
        fname : "tola",
        lname : "shola",
        Email : "tshola@gmail.com",
        pin : 5555,
    },
    
];    

    var but = document.getElementById("btnSubmit");

    but.onclick = function() {
        var username = document.getElementById("mailInput").value;
        var password = document.getElementById("loginPin").value;
        

        for (var i = 0; i < users.length; i++) {
            if(username == users[i].Email && password == users[i].pin) {

                document.getElementById('divisionOne').style.display = "none";
                document.getElementById('divisionTwo').style.display = "block";
                document.getElementById('wel').innerHTML = "Welcome" + " " + users[i].fname;

                alert('login sucess');
                
            }else { 
                document.getElementById('error').style.display = "block";
            }
            
        }
    };

        document.getElementById("cancel").addEventListener('onclick', reset)
        
        function reset() {
            document.getElementById('divisionTwo').style.display = "none";
            document.getElementById('divisionOne').style.display = "block";
            username.value = " ";
            password = " ";
        
        };



 
     