$(function () {
    $('#bestRoomsArea .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    });
    $('#testimonials .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    document.getElementById('related-area').innerHTML = `
    ${relatedRoom.map(function  related(relRoom){
        return `
            <div class="col-lg-4">
                <div class="card" style="width: 400px">
                    <div class="cardImg">
                        <img src="${relRoom.image}" class="card-img-top" alt="...">
                        <div class="check">
                            <a href="${relRoom.link}"><button>Check Details <i class="fa fa-chevron-right" aria-hidden="true"></i></button></a>
                        </div>
                    </div>
                    <span>${relRoom.price}/Night</span>
                    <div class="m-4 text-justify">
                        <h5 class="">${relRoom.name}</h5>
                        <p class="card-text"><i class="fas fa-user-friends"></i>${relRoom.roomCondition}</p>
                        <p class="card-text">${relRoom.desc}</p>
                        <a href="${relRoom.link}" class="btn btn-primary">Book Now From ${relRoom.price}</a>
                    </div>
                </div>
            </div>
        `
        
    }).join("")}
`
    $('.overview .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
});

// coonect the section BestRooms
document.getElementById('bestRooms').innerHTML = `
    ${roomsData.map(function card(room) {
    return `
        <div class="item card" style="width: 18rem;">
        <img src="${room.image}" class="card-img-top" alt="...">
        <div class="card-body">
        <h6>${room.roomCondition} </h6>
        <h3 class="card-title">${room.name}</h3>
        <p class="card-text">${room.desc}</p>
        </div>
        <a href="${room.link}" class="btn btn-primary">Book Now${room.price}</a>
        </div>
        
        `
}).join("")}
`
// jquery carousel start


document.getElementById("testi-content").innerHTML = `
    <div class="title">
        <h1>Testimonials</h1>
        <h3>What they Say</h3>
    </div>
    `
document.getElementById('slider').innerHTML = `
        ${clients.map(function name(client) {
    return `
            <div class="item">
                <div class="img"><img src="${client.image}" width="100%"></div>
                <h4>${client.name}</h4>
                <p>${client.comment}c</p>
            </div>
              
          `
}).join("")}
    
`


