     
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
			alert("You missed something...")
		}
		
		else {
			myFirebaseRef.push({
				"Title":""+title,
				"Name":""+name,
				"Email":""+email,
				"Post":""+post,
				});
				alert("Submitted!")
			$("#displayname").val("");
			$("#email").val("");
			$("#title").val("");
			$("#post").val("");
			//window.location.replace("Home.html");
		}
		
		myFirebaseRef.once('value', function(dataSnapshot) {
			dataSnapshot.forEach(function(messageSnapshot) {
			// Will be called with a messageSnapshot for each message under message_list.
			var title = messageSnapshot.child('Title').val();
			var name = messageSnapshot.child('Name').val();
			var email = messageSnapshot.child('Email').val();
			var post = messageSnapshot.child('Post').val();

			alert(title);
			alert(name);
			alert(email);
			alert(post);
			// Do something with message.
			});
		});
		
		
		/*var usersRef = new Firebase('https://samplechat.firebaseio-demo.com/users');
		var fredRef = usersRef.child('fred');
		var fredFirstNameRef = fredRef.child('name/first');
		var path = fredFirstNameRef.toString(); */

	});
});

//jQuery and JavaScript goes here

	 
 
	
	
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


