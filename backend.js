 
console.log("testing"); 
var newPostList;
$(document).ready(function(){
	  $("#enter").click(function(){ 
		console.log("click"); 
		newPostList = new PostList();
		var name= $("input:displayname").val();
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
	
$("#TESTING").click(function(){ 
	console.log("click"); 
	newPostList = new PostList();
	//var name = $("displayname").val();
	//alert(name);
}); 


