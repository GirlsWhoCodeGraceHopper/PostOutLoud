 
console.log("testing"); 
var newPostList;
$(document).ready(function(){
	  $("#enter").click(function(){  
		var name= $("#displayname").val();
		var email= $("#email").val();
		var title= $("#title").val();
		var title= $("#title").val();
		var post= $("#post").val();
		alert(name + email + title + post)
	
		var myFirebaseRef = new Firebase("https://vivid-fire-1178.firebaseio.com/");
		myFirebaseRef.push({
			"Post Title":""+title,
			"Display Name":""+name,
			"Email":""+email,
			"Post Content":""+post,
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


