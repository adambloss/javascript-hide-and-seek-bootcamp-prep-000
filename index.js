function getFirstSelector(selector){
    return document.querySelector('selector')
}
function nestedTarget(){
 a = document.querySelector('div.target')
return a.getElementsByTagName('div')[0]
}
