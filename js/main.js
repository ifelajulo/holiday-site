window.onload = function(){
    renderElement(data);
    addCheckboxEvent();
}
data = [
    {
        title:"Coochbehar, East India",
        image:"assets/images/rajbari.jpg",
        text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit, iste nesciunt voluptate sed id.",
        knownFor:["Raj Bari","Sagar Dighi"],
        region: "east india",
        theme: ["family","budhet"],
        activities: ["trekking","adventures"],
        btv: ["June, February, March",'jfm'],
        popularity: ["mustVisit"],
        places: ["andaman","delhi"],
        lowPrice: ["5000"],
        highPrice: ["6000"],
        duration: ["10"]
    },
    {
        title:"Agra, Delhi",
        image:"assets/images/tajmahal.jpeg",
        text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit, iste nesciunt voluptate sed id.",
        knownFor:["Taj Mahal","Agra Fort"],
        region: "North india",
        theme: ["honeymoon","family"],
        activities: ["trekking","adventures"],
        btv: ["June, February, March",'jfm'],
        popularity: ["yourcall"],
        places: ["goa","delhi","manali"],
        lowPrice: ["15000"],
        highPrice: ["20000"],
        duration: ["26"]
    },
    {
        title:"Agra, Delhi",
        image:"assets/images/test-image.jpg",
        text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit, iste nesciunt voluptate sed id.",
        knownFor:["Light House","Peace"],
        region: "North india",
        theme: ["honeymoon","family"],
        activities: ["trekking","adventures"],
        btv: ["June, February, March",'jfm'],
        popularity: ["yourcall"],
        places: ["goa","delhi","manali"],
        lowPrice: ["15000"],
        highPrice: ["20000"],
        duration: ["26"]
    },
    {
        title:"Coochbehar, East India",
        image:"assets/images/rajbari.jpg",
        text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit, iste nesciunt voluptate sed id.",
        knownFor:["Raj Bari","Sagar Dighi"],
        region: "east india",
        theme: ["family","budhet"],
        activities: ["trekking","adventures"],
        btv: ["June, February, March",'jfm'],
        popularity: ["mustVisit"],
        places: ["andaman","delhi"],
        lowPrice: ["5000"],
        highPrice: ["6000"],
        duration: ["10"]
    },
    {
        title:"Coochbehar, East India",
        image:"assets/images/rajbari.jpg",
        text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit, iste nesciunt voluptate sed id.",
        knownFor:["Raj Bari","Sagar Dighi"],
        region: "east india",
        theme: ["family","budhet"],
        activities: ["trekking","adventures"],
        btv: ["June, February, March",'jfm'],
        popularity: ["mustVisit"],
        places: ["andaman","delhi"],
        lowPrice: ["5000"],
        highPrice: ["6000"],
        duration: ["10"]
    },
    {
        title:"Coochbehar, East India",
        image:"assets/images/rajbari.jpg",
        text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit, iste nesciunt voluptate sed id.",
        knownFor:["Raj Bari","Sagar Dighi"],
        region: "east india",
        theme: ["family","budhet"],
        activities: ["trekking","adventures"],
        btv: ["June, February, March",'jfm'],
        popularity: ["mustVisit"],
        places: ["andaman","delhi"],
        lowPrice: ["5000"],
        highPrice: ["6000"],
        duration: ["10"]
    },
    {
        title:"Coochbehar, East India",
        image:"assets/images/rajbari.jpg",
        text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit, iste nesciunt voluptate sed id.",
        knownFor:["Raj Bari","Sagar Dighi"],
        region: "east india",
        theme: ["family","budhet"],
        activities: ["trekking","adventures"],
        btv: ["June, February, March",'jfm'],
        popularity: ["mustVisit"],
        places: ["andaman","delhi"],
        lowPrice: ["5000"],
        highPrice: ["6000"],
        duration: ["10"]
    },
    {
        title:"Agra, Delhi",
        image:"assets/images/test-image.jpg",
        text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit, iste nesciunt voluptate sed id.",
        knownFor:["Light House","Peace"],
        theme: ["honeymoon","luxury"],
        region: "North india",
        activities: ["trekking"],
        btv: ["June, February, March",'jfm'],
        popularity: ["mustVisit"],
        places: ["goa","delhi"],
        lowPrice: ["15000"],
        highPrice: ["20000"],
        duration: ["10"]
    },
    {
        title:"Agra, Delhi",
        image:"assets/images/test-image.jpg",
        text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit, iste nesciunt voluptate sed id.",
        knownFor:["Light House","Peace"],
        theme: ["honeymoon","family"],
        region: "North india",
        activities: ["trekking","adventures"],
        btv: ["Oct, Nov, Dec",'ond'],
        popularity: ["mustVisit"],
        places: ["goa","delhi"],
        lowPrice: ["80000"],
        highPrice: ["200000"],
        duration: ["5"]
    },
    {
        title:"Agra, Delhi",
        image:"assets/images/tajmahal.jpeg",
        text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit, iste nesciunt voluptate sed id.",
        knownFor:["Taj Mahal","Agra Fort"],
        region: "North india",
        theme: ["honeymoon","family"],
        activities: ["trekking","adventures"],
        btv: ["June, February, March",'jfm'],
        popularity: ["yourcall"],
        places: ["goa","delhi","manali"],
        lowPrice: ["15000"],
        highPrice: ["20000"],
        duration: ["26"]
    },
    {
        title:"Agra, Delhi",
        image:"assets/images/tajmahal.jpeg",
        text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit, iste nesciunt voluptate sed id.",
        knownFor:["Taj Mahal","Agra Fort"],
        region: "North india",
        theme: ["honeymoon","family"],
        activities: ["trekking","adventures"],
        btv: ["June, February, March",'jfm'],
        popularity: ["yourcall"],
        places: ["goa","delhi","manali"],
        lowPrice: ["15000"],
        highPrice: ["20000"],
        duration: ["26"]
    },
    {
        title:"Agra, Delhi",
        image:"assets/images/tajmahal.jpeg",
        text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit, iste nesciunt voluptate sed id.",
        knownFor:["Taj Mahal","Agra Fort"],
        region: "North india",
        theme: ["honeymoon","family"],
        activities: ["trekking","adventures"],
        btv: ["June, February, March",'jfm'],
        popularity: ["yourcall"],
        places: ["goa","delhi","manali"],
        lowPrice: ["15000"],
        highPrice: ["20000"],
        duration: ["26"]
    }
];

let tempData = [],regionclicked = 0;
function createElement(elData,plate){
    
    let card = document.createElement("div");
    if(plate % 3 == 2){
        card.setAttribute('class','card pb-3 mx-md-3');
    }
    else{
        card.setAttribute('class','card pb-3');
    }
    card.classList.add("animated", "fadeIn");
    card.setAttribute('style',"width:18.3rem;");
    let header = document.createElement("h5");
    header.setAttribute('class',"card-header");
    header.innerText = elData.title;
    card.appendChild(header);
    let img = document.createElement('img');
    img.setAttribute('src',elData.image);
    img.setAttribute('class','card-img-top');
    img.setAttribute('alt',elData.title);
    card.append(img);
    let body = document.createElement("div");
    body.setAttribute('class',"card-body pb-1");
    let text = '<p class="card-text"><strong>Known For : </strong>';
    for(i = 0; i<elData.knownFor.length;i++){
        text += '<span class = "text-blue">'+elData.knownFor[i]+'</span>';
        if(i != elData.knownFor.length -1){
            text += ' | ';
        }
    }
    text += '<br/><br/>'+elData.text+'<br/><br/><strong>Best Time : </strong>'+elData.btv[0]+'<br/><br/><strong>Package : </strong><span class = "text-budget">'+elData.lowPrice+' - '+elData.highPrice+'</span></p>';
    text += '<button type="button" onclick = "test()" class="btn btn btn-outline-primary px-4">Details</button>\
    <button type="button" class="btn btn btn-success px-4">Buy Package</button>';
    body.innerHTML = text;
    card.appendChild(body);
    return card;
}

function hide(){
    document.getElementById('products').setAttribute('class','hide');
}
function show(){
    document.getElementById('products').setAttribute('class','show');
}

function renderElement(data){
    let product = document.getElementById('products');
    product.innerHTML = '';
    
    document.getElementById('rFound').innerText = data.length;
    if(data.length == 0){
        product.innerHTML = "<div class = 'text-center animated flash mt-5' style = 'font-size:2rem;color:#586776'>No Result Found</div>";
    }
    for(j = 0; j < data.length ;j++){
        let row = document.createElement("div");
        row.setAttribute('class','row mt-3');
        let count = j;
        for(k = count; k<count+3;k++){
            if(k != data.length){
                row.appendChild(createElement(data[k],k+1));
                j++;
            }
            else{
                break;
            }
        }j--;
        console.log(data.length);
        product.appendChild(row);
    }
    // setTimeout(show,1000);
    // show();
}
function filter(){
    let temp = [];
    if(regionclicked == 1){
        temp = filteredData(tempData,'theme');
    }
    else{
        temp = filteredData(data,'theme');
    }
    temp = filteredData(temp,'activities');
    temp = filteredData(temp,'time');
    temp = filteredData(temp,'popularity');
    temp = filteredData(temp,'place');
    temp = budget(temp,'budget');
    temp = duration(temp,'duration');
    // console.log(temp);
    renderElement(temp);
}
function filteredData(data,id){
    let list = [];
    let temp = [];
    let check = 0;
    nodes = document.getElementById(id);
    nodes = nodes.getElementsByTagName('input');
    for(i = 0; i<nodes.length; i++){
        if(nodes[i].checked == true){
            list.push(nodes[i].name);
            check = 1;
        }
    }

    if(check == 0) return data;

    for(j = 0; j< data.length; j++){
        for(i = 0 ; i<list.length; i++){
            let count = 0,initial = 0;
            if(id == 'theme'){newl = data[j].theme.length;}
            else if(id == 'activities'){newl = data[j].activities.length;}
            else if(id == 'time'){newl = 2;initial = 1}
            else if(id == 'popularity'){newl = data[j].popularity.length;}
            else if(id == 'place'){newl = data[j].places.length;}

            for(k = initial; k< newl; k++){
                if(id == 'theme'){checkValue = data[j].theme[k];}
                else if(id == 'activities'){checkValue = data[j].activities[k];}
                else if(id == 'time'){checkValue = data[j].btv[k];}
                else if(id == 'popularity'){checkValue = data[j].popularity[k];}
                else if(id == 'place'){checkValue = data[j].places[k];}
                if(list[i].toLowerCase() == checkValue.toLowerCase()){
                    count = 1;
                    break;
                }
            }
            if(count == 1){
                temp.push(data[j]);
                break;
            }
        }
    }
    return temp;
}


function region(){
    // hide();
    tempData = [];
    regionclicked = 1;
    let region = document.getElementById('region').value;
    for(i = 0; i< data.length; i++){
        let place = data[i];
        if(place.region.toLowerCase() == region.toLowerCase()){
            tempData.push(place);
        }
    }
    filter();
}


function budget(data,id){
    let list = [];
    let temp = [];
    let check = 0;
    nodes = document.getElementById(id);
    nodes = nodes.getElementsByTagName('input');
    for(i = 0; i<nodes.length; i++){
        if(nodes[i].checked == true){
            list.push(nodes[i].name);
            check = 1;
        }
    }
    if(check == 0) return data;
    
    for(j = 0; j< data.length; j++){
        for(i = 0 ; i<list.length; i++){
            let count = 0;
            
            switch(list[i]){
                case 'lt10000':
                    if(parseInt(data[j].highPrice) < 10000){
                        count = 1;
                    }
                    break;
                case 'b10k-20k':
                    if(parseInt(data[j].lowPrice) >= 10000 && parseInt(data[j].highPrice) <= 20000){
                        count = 1;
                    }
                    break;
                case 'b20k-40k':
                    if(parseInt(data[j].lowPrice) >= 20000 && parseInt(data[j].highPrice) <= 40000){
                        count = 1;
                    }
                    break;
                case 'b40k-60k':
                    if(parseInt(data[j].lowPrice) >= 40000 && parseInt(data[j].highPrice) <= 60000){
                        count = 1;
                    }
                    break;
                    case 'b60k-80k':
                    if(parseInt(data[j].lowPrice) >= 60000 && parseInt(data[j].highPrice) <= 80000){
                        count = 1;
                    }
                    break;
                case 'gt80k':
                    if(parseInt(data[j].lowPrice) >= 80000){
                        // console.log(data[i]);
                        count = 1;
                    }
                    break;
            }
            if(count == 1){
                temp.push(data[j]);
                break;
            }
        }
    }
    return temp;
}

function duration(data,id){
    let list = [];
    let temp = [];
    let check = 0;
    nodes = document.getElementById(id);
    nodes = nodes.getElementsByTagName('input');
    for(i = 0; i<nodes.length; i++){
        if(nodes[i].checked == true){
            list.push(nodes[i].name);
            check = 1;
        }
    }
    if(check == 0) return data;

    for(j = 0; j< data.length; j++){
        for(i = 0 ; i<list.length; i++){
            let count = 0;

            switch(list[i]){
                case 'd0-4':
                    if(parseInt(data[j].duration) <= 4 ){
                        count = 1;
                    }
                    break;
                case 'd5-9':
                    if(parseInt(data[j].duration) >= 5 && parseInt(data[j].duration) <= 9){
                        count = 1;
                    }
                    break;
                case 'd10-15':
                    if(parseInt(data[j].duration) >= 10 && parseInt(data[j].duration) <= 15){
                        count = 1;
                    }
                    break;
                case 'd16-25':
                    if(parseInt(data[j].duration) >= 16 && parseInt(data[j].duration) <= 25){
                        count = 1;
                    }
                    break;
                case 'd25':
                    if(parseInt(data[j].duration) > 25){
                        count = 1;
                    }
                    break;
            }
            if(count == 1){
                temp.push(data[j]);
                break;
            }
        }
    }
    return temp;
}

function addCheckboxEvent(){
    boxes = document.querySelectorAll('input[type=checkbox]');
    for(i = 0; i< boxes.length; i++){
        boxes[i].addEventListener('click',function(e){filter();});
    }
}
