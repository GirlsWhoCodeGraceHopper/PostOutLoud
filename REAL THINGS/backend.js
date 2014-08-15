     
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
		
		
		dataSnapshot.forEach(function(childSnapshot) {
		  // This code will be called twice.
		  var name = childSnapshot.name();
		  alert(name);
		  var childData = childSnapshot.val();
		  alert(childData);
		  // name will be 'fred' the first time and 'wilma' the second time.
		  // childData will be the actual contents of the child.
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


