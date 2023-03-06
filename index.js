
var bookmarkName = document.getElementById( "bname");
var websiteUrl = document.getElementById("website");

var webSiteList = [];

function addNewWebsite(){

var website = {
    name: bookmarkName.value,
    url: websiteUrl.value,
}
webSiteList.push( website );

// console.log( webSiteList );


displaySites();
clearsite();
}
function clearsite() {

    bookmarkName.value = "";
    websiteUrl.value = "";
}

function displaySites(){

    var box = ""
    for (var i = 0; i < webSiteList.length; i++) {

    // box = box +  webSiteList[i].name;
    box = box +  `<div class=" my-2 d-flex flex-wrap w-50 " >
     <p class=" gy-4 w-50" >`+ webSiteList[i].name + `</p>
            
            <a href="`+ "https://" + webSiteList[i].url +  `" class="text-decoration-none text-white btn btn-primary  w-auto mx-2" target="_blank" onclick='visitTheSite(${i})' id='websitevisit'>Visit</a>
    <button class="btn btn-danger  w-auto " onclick='deleteSiteName(${i})' > Delete</button>
    </div>`;
    }
    document.getElementById("sitename").innerHTML = box;
}

function deleteSiteName(i) {
    
    webSiteList.splice( i , 1);
    displaySites();
}

function visitTheSite(i){
    
//   var url = websiteUrl.value;
// window.open( "https://" + webSiteList[i].url , "_blank"); 


//   document.getElementById("websitevisit").innerHTML = '<a href="" class="text-decoration-none text-white" >Visit</a>';

  
    }  

    /*

        <button class="btn btn-primary col mx-3 " onclick='visitTheSite(${i})' id='websitevisit'>
            <a href="`+ "https://" + webSiteList[i].url +  `" class="text-decoration-none text-white" >Visit</a>
            </button>

*/