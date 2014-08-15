     
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
		window.location.replace("Home.html");
		}
		
		myFirebaseRef.on('child_added', function(snapshot) {
			var message = snapshot.val();
				displayChatMessage(message.name, message.text);
		});

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


