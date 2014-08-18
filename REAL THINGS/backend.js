     
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
		
		var postNum=0;
		myFirebaseRef.once('value', function(dataSnapshot) {
			dataSnapshot.forEach(function(messageSnapshot) {
			postNum=postNum+1;
			console.log(postNum)
			
			if (postNum===1){
				var title = messageSnapshot.child('Title').val();
				var name = messageSnapshot.child('Name').val();
				var email = messageSnapshot.child('Email').val();
				var post = messageSnapshot.child('Post').val();
				$("#1").val(title, name, post);
				$("#name1").val(name);
				$("#post1").val(post);
		
			}
			if (postNum===2){
				var title = messageSnapshot.child('Title').val();
				var name = messageSnapshot.child('Name').val();
				var email = messageSnapshot.child('Email').val();
				var post = messageSnapshot.child('Post').val();
				$("#title2").val(title);
				$("#name2").val(name);
				$("#post2").val(post);
			
			}
			if (postNum===3){
				var title = messageSnapshot.child('Title').val();
				var name = messageSnapshot.child('Name').val();
				var email = messageSnapshot.child('Email').val();
				var post = messageSnapshot.child('Post').val();
				$("#title3").val(title);
				$("#name3").val(name);
				$("#post3").val(post);
			
			}
			if (postNum===4){
				var title = messageSnapshot.child('Title').val();
				var name = messageSnapshot.child('Name').val();
				var email = messageSnapshot.child('Email').val();
				var post = messageSnapshot.child('Post').val();
				$("#title4").val(title);
				$("#name4").val(name);
				$("#post4").val(post);
			}
			if (postNum===5){
				var title = messageSnapshot.child('Title').val();
				var name = messageSnapshot.child('Name').val();
				var email = messageSnapshot.child('Email').val();
				var post = messageSnapshot.child('Post').val();
				$("#title5").val(title);
				$("#name5").val(name);
				$("#post5").val(post);
			}
			if (postNum===6){
				var title = messageSnapshot.child('Title').val();
				var name = messageSnapshot.child('Name').val();
				var email = messageSnapshot.child('Email').val();
				var post = messageSnapshot.child('Post').val();
				$("#title6").val(title);
				$("#name6").val(name);
				$("#post6").val(post);
			}
			if (postNum===7){
				var title = messageSnapshot.child('Title').val();
				var name = messageSnapshot.child('Name').val();
				var email = messageSnapshot.child('Email').val();
				var post = messageSnapshot.child('Post').val();
				$("#title7").val(title);
				$("#name7").val(name);
				$("#post7").val(post);
			}
			if (postNum===8){
				var title = messageSnapshot.child('Title').val();
				var name = messageSnapshot.child('Name').val();
				var email = messageSnapshot.child('Email').val();
				var post = messageSnapshot.child('Post').val();
				$("#title8").val(title);
				$("#name8").val(name);
				$("#post8").val(post);
			}
			
		 
			
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


