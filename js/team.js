var team_array = [];
class team_member {
    name;
    age;
    email;
    image;
    hobbies;
    favourite_color;
    children;
    position;
    constructor(name, age, email, image, hobbies, favourite_color, position) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.image = image;
        this.hobbies = hobbies;
        this.favourite_color = favourite_color;
        this.position = position;
        team_array.push(this);
    }
}

new team_member("Fran",35,"fran@index.com","img/person1.jpg","reading and playing chess","red","CEO");
new team_member("Bill",43,"bill@index.com","img/person2.jpg","running and playing football","green","Senior Facility Manager - Manual Room Quality Assurance");
new team_member("Fritz",27,"fritz@index.com","img/person3.jpg","swimming and biking","blue","Junior Senior Resting Assurant - Praktikant");

var team = document.getElementsByClassName('member');
var msg;

for (var i = 0; i < team_array.length; i++) {
	var person = team_array[i];
	msg = `
    <div class=toggle_more>
        <img src="${person.image}">
        <div class=overlay>Show more</div>
    </div>
    <div>
        <div class=more_info>
            Hi. My name is <strong>${person.name}</strong> and i am ${person.age} years.<br>
            I'm <strong>${person.position}</strong>. My favourite color is ${person.favourite_color} 
            and i like ${person.hobbies}.<br>
            Feel free to contact me anytime:<br>
        </div>
        <a href=mailto:${person.email}>${person.email}</a>
    </div>
    `;
	team.item(i).innerHTML = msg;
}

var toggle_info = document.getElementsByClassName('toggle_more');
for (var i = 0; i < toggle_info.length; i++) {
    	let index = i;
        toggle_info[i].addEventListener('click',function(){ toggle_display(index) }, false);
	}

var more_info = document.getElementsByClassName('more_info');
var overlay_items = document.getElementsByClassName('overlay');
function toggle_display(i) {
	let item = more_info[i].style;
	let overlay = overlay_items[i].style;
    if (!item.display) {
        item.display = "none";
    };
	if (item.display == "none") {
		item.display = "block";
		overlay.display = "none"; // Workaround ,beacuse first action needs 2 clicks
	} else {
		item.display = "none";
		overlay.display = "flex";
	}
}