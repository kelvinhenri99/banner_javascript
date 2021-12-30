var id,pause=0,position=0; 
    function banner() {
    var i,k,msg=" TEXTO LIVRE ";
    k=(300/msg.length)+1;
    for(i=0;i<=k;i++) msg+=" "+msg;
    document.form2.banner.value=msg.substring(position,position+1000);
    if(position++==msg.length) position=0;
    id=setTimeout("banner()",120);
}

banner();