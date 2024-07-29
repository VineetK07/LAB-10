var itemCount = 0;

function addToList(){
    itemount++;
    var listItem = document.createElement('li');
    listItem.innertext = 'Item' + itemCount;
    document.getElementById('itemlist').appendChild(listItem)
}