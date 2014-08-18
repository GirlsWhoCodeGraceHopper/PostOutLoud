  
var newPostList;
$(document).ready(function(){
	  $("#enter").click(function(){  
		var name= $("#displayname").val();
		var email= $("#email").val();
		var title= $("#title").val(); 
		var post= $("#post").val(); 
 
 
		if (document.getElementById('cb').checked) {
            var check= 1;
        } else {
            var check= 0;
        }
 
  
		var myFirebaseRef = new Firebase("https://vivid-fire-1178.firebaseio.com/");
		
		if ( name=== "" || email=== "" || title=== ""|| post=== ""|| check=== 0) {
			alert("You missed something...");
		} else {
			myFirebaseRef.push({
				"Title":""+title,
				"Name":""+name,
				"Email":""+email,
				"Post":""+post,
				});
				
			alert("Submitted!");
		
			myFirebaseRef.on('child_added', function(childSnapshot, prevChildName) {
				$("#displayname").val("");
				$("#email").val("");
				$("#title").val("");
				$("#post").val("");
				window.location = "home.html";
			});
		 
		}			
		/*var usersRef = new Firebase('https://samplechat.firebaseio-demo.com/users');
		var fredRef = usersRef.child('fred');
		var fredFirstNameRef = fredRef.child('name/first');
		var path = fredFirstNameRef.toString(); */

	});
});

//jQuery and JavaScript goes here

//jQuery and JavaScript goes here

function showPosts(){ 
 
	var postNum=0;
	var myFirebaseRef = new Firebase("https://vivid-fire-1178.firebaseio.com/");
	myFirebaseRef.once('value', function(dataSnapshot) {
		dataSnapshot.forEach(function(messageSnapshot) {
			postNum=postNum+1;
			console.log(postNum);
			if (postNum===1){
				var title = messageSnapshot.child('Title').val();
				var name = messageSnapshot.child('Name').val();
				var email = messageSnapshot.child('Email').val();
				var post = messageSnapshot.child('Post').val();
				alert("we got to 1"); 
				document.getElementById("title1").innerHTML = title;
				document.getElementById("name1").innerHTML = name;
				document.getElementById("post1").innerHTML = post;
			}
			if (postNum===2){
				var title = messageSnapshot.child('Title').val();
				var name = messageSnapshot.child('Name').val();
				var email = messageSnapshot.child('Email').val();
				var post = messageSnapshot.child('Post').val();
				alert("we got to 2");  
				document.getElementById("title2").innerHTML = title;
 				document.getElementById("name2").innerHTML = name;
				document.getElementById("post2").innerHTML = post;
			
			}
			if (postNum===3){
				var title = messageSnapshot.child('Title').val();
				var name = messageSnapshot.child('Name').val();
				var email = messageSnapshot.child('Email').val();
				var post = messageSnapshot.child('Post').val();
				alert("we got to 3"); 
				document.getElementById("title3").innerHTML = title;
 				document.getElementById("name3").innerHTML = name;
				document.getElementById("post3").innerHTML = post;				
			
			}
			if (postNum===4){
				var title = messageSnapshot.child('Title').val();
				var name = messageSnapshot.child('Name').val();
				var email = messageSnapshot.child('Email').val();
				var post = messageSnapshot.child('Post').val();
				document.getElementById("title4").innerHTML = title;
 				document.getElementById("name4").innerHTML = name;
				document.getElementById("post4").innerHTML = post;			 
			}
			if (postNum===5){
				var title = messageSnapshot.child('Title').val();
				var name = messageSnapshot.child('Name').val();
				var email = messageSnapshot.child('Email').val();
				var post = messageSnapshot.child('Post').val();
				document.getElementById("title5").innerHTML = title;
 				document.getElementById("name5").innerHTML = name;
				document.getElementById("post5").innerHTML = post;				 
			}
			if (postNum===6){
				var title = messageSnapshot.child('Title').val();
				var name = messageSnapshot.child('Name').val();
				var email = messageSnapshot.child('Email').val();
				var post = messageSnapshot.child('Post').val();
				document.getElementById("title6").innerHTML = title;
 				document.getElementById("name6").innerHTML = name;
				document.getElementById("post6").innerHTML = post;			 
			}
			if (postNum===7){
				var title = messageSnapshot.child('Title').val();
				var name = messageSnapshot.child('Name').val();
				var email = messageSnapshot.child('Email').val();
				var post = messageSnapshot.child('Post').val();
				document.getElementById("title7").innerHTML = title;
 				document.getElementById("name7").innerHTML = name;
				document.getElementById("post7").innerHTML = post;			 
			}
			if (postNum===8){
				var title = messageSnapshot.child('Title').val();
				var name = messageSnapshot.child('Name').val();
				var email = messageSnapshot.child('Email').val();
				var post = messageSnapshot.child('Post').val();
				document.getElementById("title8").innerHTML = title;
 				document.getElementById("name8").innerHTML = name;
				document.getElementById("post8").innerHTML = post;				 
			}
			 
		});
		alert("done showing posts i guess");
	}); 
}
 
function Post(creator, content, date) {
	console.log("new Post");
	this.creator = creator;
	this.content = content;
	this.date = date;

}


function PostList() {
	this.postList = [];
	
	this.display = function () {
		console.log("display"); 
		//how to display each post in html   
	};

	this.addPost = function (post) {
		console.log("addPost"); 
		this.postList.push(post);
	
	};
}
	
$("#enter").click(function(){ 
	console.log("click"); 
	newPostList = new PostList();
	//var name = $("displayname").val();
	//alert(name);
}); 


