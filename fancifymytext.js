
function myfunction(){
    var str = document.getElementById('text');
    str.style.fontSize ='1em';
    console.dir(text);
    str.style.fontWeight= '700';
    console.log(text.value.toUpperCase());
    
    //document.getElementById('text').style = 'text-decoration: underline ';
      
}
function x(){
    alert("Hello,World!");
    document.querySelector('#text').style.fontWeight= '300';

}
function y(){
    text = document.getElementById('text');
    text.value = text.value.toUpperCase();
    console.dir(text);
    console.log(text.value.toUpperCase());
    sentence = text.value;
    var parts = sentence.split(".");
    text.value = parts.join('-Moo');

}

//text = document.getElementById('btn');
//btn.addeventListener('click', myfunction());
