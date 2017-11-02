(function()
{

//cahe variable
var documen_t = document;



// remove basket
function basket_remove()
{

        var btn_order = documen_t.querySelector("#btn_o") ,
            btn_cross = documen_t.querySelector("#btn_c") , 
            friend_santa = documen_t.querySelector("#empty_i");


        if(anchor.children.length == 0)
        {
            btn_order.className = "btn-order_none";
            btn_cross.className = "btn-cross_none";
            friend_santa.className = "empty_с";
        }
        else
        {
            btn_order.className = "btn-order";
            btn_cross.className = "btn-cross";
            friend_santa.className = "empty_с_non";
        }


}


setInterval(basket_remove , 100);




















// show basket
var t_basket = documen_t.querySelector("#basket") , 
    box_basket = documen_t.querySelector("#box_basket");

    t_basket.addEventListener('click', show_basket);

    function show_basket()
    {
    	if(box_basket.className != "basket" )
    	{
    		box_basket.className = "basket";
    	}
    	else
    	{
    		box_basket.className = "basket-non";
    	}
    }





















//show button overview

var overview = documen_t.querySelectorAll(".overview");


	for(var i = 0 ; i < overview.length ; i++)
	{
		overview[i].addEventListener('click', show_overview);
	}	

	function show_overview()
	{
       var elements = documen_t.querySelectorAll(".about_product_list")
       , element = this.nextSibling.nextSibling;

       if(element.className == "about_product_list_non")
       {
            for(var i = 0 ; i < elements.length; i++)
            {
                elements[i].className = "about_product_list_non";
            }


            element.className = "about_product_list";
       }
       else
       {
             element.className = "about_product_list_non";
       }

	}




























// form circle action

var color_circle = documen_t.querySelectorAll(".form_color input");

for(var d = 0 ; d < color_circle.length ; d++)
{
    color_circle[d].addEventListener("click" , circle_action);
}

function circle_action()
{
    // part1 func

    this.setAttribute("checked", "checked");



    // part2 func


   var way_for_img =  this.parentNode.parentNode.parentNode.children[3].children[0];


    switch(this.id)
        {
            case this.id: way_for_img.src = "img/" + this.id + ".png";
            break;
        }




}




























// click button

var button_take_b = documen_t.getElementsByClassName("take_basket");
    
    for(var n = 0 ; n < button_take_b.length; n++)
    {
        button_take_b[n].addEventListener('click', button_take_basket);
    }

    function button_take_basket()
    {
        // part1 function
        var parent_tag = this.parentNode , 
            size =  parent_tag.childNodes[1].value , 
            name =  parent_tag.childNodes[11].innerHTML ,
            price =  parent_tag.childNodes[13].innerHTML ,
            img = parent_tag.childNodes[9].children[0].src ,
            color;



            // for(var i = 0 ; i < parent_tag.childNodes[3].children.length; i++)
            // {
            //     if(parent_tag.childNodes[3].children[i].children[0].checked)
            //     {
            //         var color = parent_tag.childNodes[3].children[i].children[0];
            //         var c_circle = parent_tag.childNodes[3].children[i].children[1];
            //         color = c_circle.className;
            //         console.log(color);
            //     }
            // }

        // part2 function



            // create element block and string
            //element div + img
            var elem_div = documen_t.createElement("div") , 
                elem_div_2 = documen_t.createElement("div") , 
                img_for_el_2 = documen_t.createElement("img") ,
            //element span name
                elem_sp_n = documen_t.createElement("span"); 
                elem_sp_n_2 = documen_t.createElement("span"); 
                elem_sp_n_3 = documen_t.createElement("span"); 
                elem_sp_n_4 = documen_t.createElement("span"); 


                //create class for div
                //element div + img
                elem_div.setAttribute("class", "product_for_basket");
                elem_div_2.setAttribute("class", "pro_photo");
                img_for_el_2.setAttribute("src", "" + img + "");
                // element_name
                elem_sp_n.setAttribute("class", "upper color_pro");
                elem_sp_n.innerHTML = name;
                // element_price
                elem_sp_n_2.setAttribute("class", "upper price_pro");
                elem_sp_n_2.innerHTML = price;
                // element_size
                elem_sp_n_3.setAttribute("class", "upper size_pro");
                elem_sp_n_3.innerHTML = size;
                //cross element
                elem_sp_n_4.setAttribute("class", "cross");

                // +++++++++

                //append
                elem_div.appendChild(elem_div_2);
                elem_div_2.appendChild(img_for_el_2);
                //name
                elem_div.appendChild(elem_sp_n);
                //price
                elem_div.appendChild(elem_sp_n_2);
                // size
                elem_div.appendChild(elem_sp_n_3);
                //element cross
                elem_div.appendChild(elem_sp_n_4);



                var anchor = documen_t.getElementById("anchor");

                anchor.appendChild(elem_div);
        




 for(var c = 0 ; c < parent_tag.children.length; c++)
            {
                if(parent_tag.children[c].nodeName == "FORM")
                    {
                        for(var i = 0 ; i < parent_tag.childNodes[3].children.length; i++)
                        {
                            if(parent_tag.childNodes[3].children[i].children[0].checked)
                            {
                                var color = parent_tag.childNodes[3].children[i].children[0] , 
                                c_circle = parent_tag.childNodes[3].children[i].children[1];
                                color = c_circle.className;
                                

                                // create element

                                var label = documen_t.createElement("label") ,
                                    input = documen_t.createElement("input") ,
                                    i = documen_t.createElement('i');


                                // install attr + class ...

                                input.setAttribute('name', 'color_circle');
                                input.setAttribute('type', 'radio');
                                i.setAttribute('class',  color);

                                //appendChild

                                label.appendChild(input);
                                label.appendChild(i);


                                elem_div.appendChild(label);

                            }
                        }   
                    }
            } // end for






























        // remove element

        var cross = document.querySelectorAll('.cross');


            for(var o = 0 ; o < cross.length ; o++)
            {
                cross[o].addEventListener('click', cross_ac);
                // var num = o;
            }   


            function cross_ac()
            {
                this.parentNode.remove();
            }



    }

















































// timer button basket bottom
// timer button basket bottom


var block_f_i = documen_t.querySelector("#block_f_i") , 
    number_bl_f = documen_t.querySelector("#number_bl_f");



function move()
{
    if(anchor.children.length == 0)
    {
        block_f_i.className = "block_f_none";
    }
    else
    {
        block_f_i.className = "block_f";
        number_bl_f.innerHTML = anchor.children.length;

    }

}



 setInterval(move, 200);













































// checkbox _big_block



var che_block = documen_t.querySelectorAll(".checkbox") , 
    block_f_id = documen_t.querySelectorAll(".products");
    

    for(var m = 0; m < che_block.length ; m++)
    {
        che_block[m].addEventListener("click", func_check_block);
    }


function func_check_block()
{
    for(var i = 0 ; i < block_f_id.length ; i++)
    {
        if(this.parentNode.id == block_f_id[i].getAttribute('name'))
        {
            if(this.checked)
            {
                block_f_id[i].className = "products";
            }
            else
            {
                block_f_id[i].className = "ds";
            }
        }
    }



}






























































})()

