

    window.onload = (event) => {
    console.log('page is fully loaded');
    display_ct();
  };

    function display_c(){   
        let x = 0;
   mytime=setTimeout('display_ct()',1000)
    }
    
    function display_ct() {
    var x = new Date()
    if(x.getHours() > 12) {
    document.querySelector('P').innerHTML = `The Time is: ${x.getHours()}:${x.getMinutes()}:${x.getSeconds()} PM`
    } else {
    document.querySelector('P').innerHTML = `The Time is: ${x.getHours()}:${x.getMinutes()}:${x.getSeconds()} AM`
    }

    display_c();
     }

    // <body onload=display_ct();>

   