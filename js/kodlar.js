var sozler=["Erken kalkan yol alır.","Körle yatan şaşı kalkar.","Yolu uzun olanın yükü ağır olur.","Kervan yolda düzülür."];
console.log(sozler);

function gununSozunuGetir()
{

    var rastgeleSayi=Math.floor(Math.random() * sozler.length);
    
    var gununSozu=sozler[rastgeleSayi];

    if(rastgeleSayi==0)
    {
        document.body.style.background="red";
        
    }
    else if(rastgeleSayi==1)
    {
        document.body.style.background="blue";
       
    }
    else if(rastgeleSayi==2)
    {
        document.body.style.background="green";
        
    }
    else if(rastgeleSayi==3)
    {
        document.body.style.background="yellow";
        
    }
    else
    {
        document.body.style.background="white";
    }
    
    document.getElementsByTagName("h3")[0].innerHTML="Günün Sözü: "+gununSozu;
}

