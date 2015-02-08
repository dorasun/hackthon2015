/* The Flower Heart */
$("#butt").click(function(){
	console.log("it works");
	$("#text").text("we changed");
});

var texts = ["Step 1: Fold a square paper in half and rip it to create a rectangle", 
			"Step 2: Fold the rectangle in half. Fold the bottom corners up to the crease you just made. ", 
			"Step 3: Unfold, and fold the top corners down to the middle crease. The resulting creases should look like this:", 
			"Step 4: Unfold, then turn the paper over. Fold both sides to the middle crease",
			"Step 5: Turn the paper back over and collapse the creases as shown below",
			"Step 6: Repeat on the other side. The result should look like this:",
			"Step 7: Fold the flaps on the right to the middle, like so",
			"Step 8: Open the newly created flap and press it down",
			"Step 9: Repeat step 8 on the other flap",
			"Step 10: Repeat steps 7-9  on the other side of the square",
			"Step 11: Fold the corners of the mini square as shown below",
			"Step 12: Open the newly created flap and press it down",
			"Step 13: Repeat on the other side",
			"Step 14: Repeat steps 11-13 on all the other mini squares",
			"Step 15: Turn your origami over and fold the top flap down",
			"Step 16: Flip it over and voila!",
			"Extra: Open up your heart and write a Valentine’s Day message!"];

var imgs = ["s2.jpg", "s3.jpg", "s4.jpg","s5.jpg", "s6.jpg", "s7.jpg", "s8.jpg", "s9.jpg", 
			"s10.jpg", "s11.jpg", "s12.jpg", "s13.jpg", "s14.jpg", "s15.jpg", "s16.jpg", "final.jpg", "message.jpg" ];

var c = 0;

function changeImage()
{
	if(c < imgs.length){
		document.getElementById("images").src = imgs[c];
		$("#text").text(texts[c]);
		check();
		c = c+1;
	}
}
function changeImageBack()
{
	if(c > 0){
		c = c-1;
		document.getElementById("images").src = imgs[c];
		$("#text").text(texts[c]);
		check();
	}
}


/* The Crane Couple */
$("#butt2").click(function(){
	console.log("it works");
	$("#text2").text("we changed");
});

var texts2 = ["Step 1: Start with a square", 
			"Step 2:  Fold it in half and rip it to create a rectangle", 
			"Step 3: Fold the rectangle in half and rip it (NOT COMPLETELY) to make two connected squares", 
			"Step 4: Fold both bottom corners of the squares up to the center. Unfold, and fold the top corners down to the center. Unfold again to this result",
			"Step 5: Turn over and fold the sides of the squares to the middle. Unfold and fold both bottom sides up.",
			"Step 6: Unfold",
			"Step 7: Collapse the sides as shown below. Fold the side of the square into the middle",
			"Step 8: Repeat on all sides",
			"Step 9: Fold the top down",
			"Step 10: Unfold",
			"Step 11: Open the fold up as shown below and flatten",
			"Step 12: Repeat on all sides",
			"Step 13: Fold the sides in and repeat on all sides",
			"Step 14: Fold one side up and inward",
			"Step 15: Repeat on other side at higher angle",
			"Step 16: Fold the neck downwards and inwards",
			"Step 17: Repeat steps 14-16 on the other side",
			"Step 18: Curl the wings downwards and voila!"];

var imgs2 = ["1.jpg", "2.jpg", "3.jpg", "4.jpg","5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", 
			 "11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg", "16.jpg","17.jpg", "18.jpg" ];

var c2 = 0;

function changeImage2()
{
	if(c2 < imgs2.length){
		document.getElementById("images2").src = imgs2[c2];
		$("#text2").text(texts2[c2]);
		check();
		c2 = c2+1;
	}
}
function changeImageBack2()
{
	if(c2 > 0){
		c2 = c2-1;
		document.getElementById("images2").src = imgs2[c2];
		$("#text2").text(texts2[c2]);
		check();
	}
}


/* The Lily Flower */
$("#butt3").click(function(){
	console.log("it works");
	$("#text3").text("we changed");
});

var texts3 = ["Step 1: Start with a square",
			"Step 2: Fold in side ways both ways and diagonally both ways",
			"Step 3: Push on side into the center of the triangle",
			"Step 4: Repeat",
			"Step 5: Fold one of the side edges towards the center crease",
			"Step 6: Repeat on all sides and reopen them",
			"Step 7: Take one of the folded side edges and push it flat down",
			"Step 8: Repeat all 4 sides",
			"Step 9: Fold the bottom tip to the top to form a crease. Open it back up",
			"Step 10: Fold the top side edges towards the center crease",
			"Step 11: Open it up and push down the center flap to press down both sides together ",
			"Step 12: Push the center triangle back up the crease",
			"Step 13: Repeat steps 10 - 12 on all sides",
			"Step 14: Using the flat side, fold the outside edges towards the center crease",
			"Step 15: Repeat on all sides",
			"Step 16: Fold down the top flap to create a petal",
			"Step 17: Repeat on all sides",
			"Step 18: Use a pen and curl the petals for the finishing touch and voila!"];

var imgs3 = ["a1.jpg", "a2.jpg", "a3.jpg", "a4.jpg","a5.jpg", "a6.jpg", "a7.jpg", "a8.jpg", "a9.jpg", "a10.jpg", 
			 "a11.jpg", "a12.jpg", "a13.jpg", "a14.jpg", "a15.jpg", "a16.jpg","a17.jpg", "a18.jpg" ];

var c3 = 0;

function changeImage3()
{
	if(c3 < imgs3.length){
		document.getElementById("images3").src = imgs3[c3];
		$("#text3").text(texts3[c3]);
		check();
		c3 = c3+1;
	}
}
function changeImageBack3()
{
	if(c3 > 0){
		c3 = c3-1;
		document.getElementById("images3").src = imgs3[c3];
		$("#text3").text(texts3[c3]);
		check();
	}
}


function check()
{
	if (c==imgs.length-1){
		document.getElementById("but").style.visibility = 'hidden';
	}
	else {
		document.getElementById("but").style.visibility = 'visible';	
	}
	if (c<1){
		document.getElementById("prv").style.visibility = 'hidden';
	}
	else {
		document.getElementById("prv").style.visibility = 'visible';	
	}

	if (c2==imgs2.length-1){
		document.getElementById("but2").style.visibility = 'hidden';
	}
	else {
		document.getElementById("but2").style.visibility = 'visible';	
	}
	if (c2<1){
		document.getElementById("prv2").style.visibility = 'hidden';
	}
	else {
		document.getElementById("prv2").style.visibility = 'visible';	
	}

	if (c3==imgs3.length-1){
		document.getElementById("but3").style.visibility = 'hidden';
	}
	else {
		document.getElementById("but3").style.visibility = 'visible';	
	}
	if (c3<1){
		document.getElementById("prv3").style.visibility = 'hidden';
	}
	else {
		document.getElementById("prv3").style.visibility = 'visible';	
	}
}
