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
	msg = "<div class=\"toggle_more\"><img src=\'"+person.image+"\'></div><div>"+
	"<div class=\"more_info\">Hi. My name is "+person.name+" and i am "+person.age+" years.<br>"+
	"I\'m "+person.position+". My favourite color is "+person.favourite_color+
	" and i like "+person.hobbies+".<br>Feel free to contact me anytime:<br></div>"+
	"<a href=\"mailto:"+person.email+"\">"+person.email+"</a></div>";
	team.item(i).innerHTML = msg;
}

var toggle_info = document.getElementsByClassName('toggle_more');
var more_info = document.getElementsByClassName('more_info');

for (var i = 0; i < toggle_info.length; i++) {
    (function () {
    	var j = i;
        toggle_info[i].addEventListener('click',function(){
		display_more_info(j);
	}, false);
    }()); // immediate invocation
}

function display_more_info(i) {
	var item = more_info[i].style;
	if (item.display == "none") {
		item.display = "block";
	} else {
		item.display = "none";
	}
}