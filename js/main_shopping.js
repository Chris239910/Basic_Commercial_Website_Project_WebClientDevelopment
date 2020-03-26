var prods = [{
	id : 1,
	title :"Black Blazer",
	img : './img/man1.png',
	price : 39.99,
	cat : 1
},
{
	id : 2,
	title :"Grey Shirt",
	img : './img/man2.png',
	price : 55.99,
	cat : 1
},
{
	id : 3,
	title :"Black Pant",
	img : './img/man3.png',
	price : 49.99,
	cat : 1
},
{
	id : 4,
	title :"Slim Shirt",
	img : './img/man4.png',
	price : 49.99,
	cat : 1
},
{
	id : 5,
	title :"Black T-Shirt",
	img : './img/man5.png',
	price : 15.99,
	cat : 1
},
{
	id : 6,
	title :"Black Jeans",
	img : './img/man6.png',
	price : 16.99,
	cat : 1
},
{
	id : 7,
	title :"Skirt Dress",
	img : './img/women1.png',
	price : 79.99,
	cat : 2
},
{
	id : 8,
	title :"Flower Wrap Dress",
	img : './img/women2.png',
	price : 45.59,
	cat : 2
},
{
	id : 9,
	title :"Black Party Dress",
	img : './img/women3.png',
	price : 99.99,
	cat : 2
},
{
	id : 10,
	title :"Black Gown",
	img : './img/women4.png',
	price : 119.59,
	cat : 2
},
{
	id : 11,
	title :"Flower Jumpsuit",
	img : './img/women5.png',
	price : 54.59,
	cat : 2
},
{
	id : 12,
	title :"Caro Dress",
	img : './img/women6.png',
	price : 39.99,
	cat : 2
},
{
	id : 13,
	title :"Set Clothes: Short Pant and Shirt",
	img : './img/kid1.png',
	price : 45.99,
	cat : 3
},
{
	id : 14,
	title :"Hoddie for Girl",
	img : './img/kid2.png',
	price : 25.59,
	cat : 3
},
{
	id : 15,
	title :"Jean Coats",
	img : './img/kid3.png',
	price : 25.99,
	cat : 3
},
{
	id : 16,
	title :"Princess Dress",
	img : './img/kid4.png',
	price : 49.99,
	cat : 3
},
{
	id : 17,
	title :"Shirt For School Boy",
	img : './img/kid5.png',
	price : 19.99,
	cat : 3
},
{
	id : 18,
	title :"Pink Dress",
	img : './img/kid6.png',
	price : 36.59,
	cat : 6
}
]
if (document.readyState == 'loading'){
	document.addEventListener('DOMContentLoaded', ready);
}else{
	ready();
}
// $( document ).ready(function() {
	// console.log($(".content"));
	// $(".content").innerHTML = "testing";
	// var products = [{id:1,name:"product1",categorie:3
	// },{id:1,name:"product600",categorie:6
	// },{id:1,name:"product1",categorie:4
	// },{id:1,name:"product5",categorie:2
	// },{id:1,name:"product1",categorie:3
	// }];
	// let str = "";
	
	
	// products.forEach(function(prod,index){	
		// str += prod.name;
			// $(".content").text( "<b>"+str+"</b>" );

	// });
	
	

   // $(".categorie").on('click',function(){
	  // str = '';
	  // let id = this.id;
	   // products.forEach(function(prod,index){
		// console.log(prod.categorie);
		// if(prod.categorie.toString() === id){
			// str += prod.name;
		// }
	// });
	// console.log(str);
	// $(".content").text( "<b>"+str+"</b>" );
   // });
// });


var $slides = $(".slides");
var $slide = $(".slide1");
var count = 1;
$(document).ready(function(){
	prods.forEach(function(product){
		if(product.cat == 1){
		$('.men').append('<div class="box">'+
					'<img id="image1" src="'+product.img+'" alt="Not Found">'+
					'<p><input class="quantity_'+product.id+'" type="number" name="quantity" min="0" max="20">'+
					'<button id="'+product.id+'" type="button" class="btn-secondary add_to_cart" title="Add to cart"><i class="fas fa-shopping-bag"></i></button></p>'+
						'<i class="fas fa-star"></i>'+
						'<i class="fas fa-star"></i>'+
						'<i class="fas fa-star"></i>'+
						'<i class="fas fa-star"></i>'+
						'<i class="fas fa-star-half-alt"></i>'+
						'<h3 id="name1">'+product.title+'</h3>'+
						'<div id="price1">'+product.price+'</div>'+
					'</p></div>');
	}else if(product.cat == 2){
				$('.women').append('<div class="box">'+
					'<img id="image1" src="'+product.img+'" alt="Not Found">'+
					'<p><input class="quantity_'+product.id+'" type="number" name="quantity" min="0" max="20">'+
					'<button id="'+product.id+'" type="button" class="btn-secondary add_to_cart" title="Add to cart"><i class="fas fa-shopping-bag"></i></button></p>'+
						'<i class="fas fa-star"></i>'+
						'<i class="fas fa-star"></i>'+
						'<i class="fas fa-star"></i>'+
						'<i class="fas fa-star"></i>'+
						'<i class="fas fa-star-half-alt"></i>'+
						'<h3 id="name1">'+product.title+'</h3>'+
						'<div id="price1">'+product.price+'</div>'+
					'</p></div>');
	}else{
			$('.children').append('<div class="box">'+
					'<img id="image1" src="'+product.img+'" alt="Not Found">'+
					'<p><input class="quantity_'+product.id+'" type="number" name="quantity" min="0" max="20">'+
					'<button id="'+product.id+'" type="button" class="btn-secondary add_to_cart" title="Add to cart"><i class="fas fa-shopping-bag"></i></button></p>'+
						'<i class="fas fa-star"></i>'+
						'<i class="fas fa-star"></i>'+
						'<i class="fas fa-star"></i>'+
						'<i class="fas fa-star"></i>'+
						'<i class="fas fa-star-half-alt"></i>'+
						'<h3 id="name1">'+product.title+'</h3>'+
						'<div id="price1">'+product.price+'</div>'+
					'</p></div>');
	}
	});
	$('.add_to_cart').on('click',function(){
		var prod_id = $(this).attr('id');

		var qty = $('.quantity_'+prod_id).val();

		let product = prods.filter(function(product) {
        return product.id == prod_id;
      	});

      	product = product[0];
      	$('.cart-items').append('<div class="cart-row">'+
					'<span class="cart-item-cart-column">'+
						'<img class="cart-item-image" src="'+product.img+'" width="50" height="50">'+
						'<span class="cart-item-title">'+product.title+'</span></span>'+
					'<span class="cart-price">'+product.price+'</span>'+
					'<span class="cart-quantity-cart-column">'+
						'<input class="cart-quantity-input" type="number" min="0" max="20" value="'+qty+'">'+
					'</span></div>');
      	$('.container').fadeOut();
	$('.feartured-categories').fadeOut();
	$('#title').fadeOut();
	$('.cart-wrapper').fadeIn();
	
	});
	setInterval(function(){
		$slides.animate({"margin-left": "-=80vw"}, 1100, function(){
			count++;
			if(count === 4){
				$slides.css("margin-left", 0);
				count = 1;
			}
		});
		
	}, 2000);
});

var x = document.getElementById("logout");
x.addEventListener("click", (e)=>{
	window.location="./sign_in.html";
	

})
$('.cart').on('click',function(){
	$('.container').fadeOut();
	$('.feartured-categories').fadeOut();
	$('#title').fadeOut();
	$('.cart-wrapper').fadeIn();
	
	
});
$('#btn-continue').on('click', function(){
	$('.container').fadeIn();
	$('.feartured-categories').fadeIn();
	$('#title').fadeIn();
	$('.cart-wrapper').fadeOut();
})


// remove cart
var removeCartItembtn = $('.btn-rm');

for(var i = 0; i < removeCartItembtn.length; i++){
	var button = removeCartItembtn[i];
	button.addEventListener('click', function(event){
		var buttoncliked = event.target;
		buttoncliked.parentElement.parentElement.remove();
		updateCartTotal();
		
		
		
	})
}

//change
function ready(){
	//var quantityInputs = $('.cart-quantity-input');
	var quantityInputs = document.getElementsByClassName('cart-quantity-input')[0].value;
	
	for(var i = 1; i < quantityInputs.length; i++){
		var input = quantityInputs[i];
		input.addEventListener('change', quantityChanged);
		
	}
}
function quantityChanged(event){
	var input = event.target
	updateCartTotal();
}




function updateCartTotal(){
	var cartItemContainer = document.getElementsByClassName('cart-items')[0];
	var cartRows = cartItemContainer.getElementsByClassName('cart-row');
	var total = 0;
	for(var i = 0; i < cartRows.length; i++){
		var cartRow = cartRows[i];
		var priceElemet = cartRow.getElementsByClassName('cart-price')[0];
		var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0].value;
		var price = parseFloat(priceElemet.innerText);
		var quantity = quantityElement.value;
		total = total + (price * quantity);
	}
	document.getElementsByClassName('total').innerText = total;
}

// $('.btn-secondary').on('click', function(){
	// alert('This item is added to cart');
	
	// var product_id = $(this).attr('id');
	// var item_image = document.getElementById('image'+product_id).src;
	// var item_name = document.getElementById('name'+product_id).innerHTML;
	// var quantity = parseFloat($('.quantity'+product_id).val());
	// var item_price = parseFloat(document.getElementById('price'+product_id).innerHTML);
	// var removebtn = document.getElementsByClassName('btn-rm');

	
	
	
	
	
	// $('.cart-items').append('<div class="cart-row"><span class="cart-item-cart-column"><img class="cart-item-image" src="+pro.item-image+" width="50" height="50"><span class="cart-item-title">"+pro.item_name+"</span></span><span class="cart-price">"+pro.item_price+"</span><span class="cart-quantity-cart-column"><input class="cart-quantity-input" type="number" min="0" max="20" value="1"><button class="btn-rm">REMOVE</button></span></div>');
// })



// find categories
$('#all-products').on('click', function(){
	$('#title')[0].innerText = 'Products';
	$('.men').fadeIn();
	$('.women').fadeIn();
	$('.children').fadeIn();
})
$('#2').on('click', function(){	
	 $('#title')[0].innerText = 'Men';
	$('.men').fadeIn();
	$('.women').fadeOut();
	$('.children').fadeOut();
	$('.feartured-categories').fadeOut();
})
$('#3').on('click', function(){	
	 $('#title')[0].innerText = 'Women';
	$('.men').fadeOut();
	$('.women').fadeIn();
	$('.children').fadeOut();
	$('.feartured-categories').fadeOut();
})
$('#4').on('click', function(){	
	 $('#title')[0].innerText = 'Children';
	$('.men').fadeOut();
	$('.women').fadeOut();
	$('.children').fadeIn();
	$('.feartured-categories').fadeOut();
})

//checkoutbtn
$('#btn-checkout').on('click', function(){
	window.location ="./checkout.html"
})


var list = $('.box h3');
//console.log(list);
var forms = document.forms;
var searchBar = forms["search-form"].querySelector("input");
searchBar.addEventListener("keyup", (e)=> {
	
	var term = e.target.value.toLowerCase();
	if(term == ""){
		$('.side-menu').show();
	$('.slider').show();
	}else{
	$('.side-menu').hide();
	$('.slider').hide();
	var clothes = list;
	Array.from(clothes).forEach((cloth)=>{
		
		var title = cloth.lastChild.textContent;
		console.log(title.toLowerCase().indexOf(term));
		// console.log(title.toLowerCase());
		if(title.toLowerCase().indexOf(term) != -1){
			cloth.parentElement.style.display = "block";
		}else{
			cloth.parentElement.style.display = "none";
		}
	})
	}
	
	
})

//add to cart

















