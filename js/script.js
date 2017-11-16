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


setInterval(basket_remove , 10);

















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
        var e_ask = document.querySelectorAll(".product_for_basket");

        if(e_ask.length < 5)
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















               }//if
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

        if(anchor.children.length == 1)
        {
            number_bl_f.innerHTML = (anchor.children.length) + " товар";
        }
        else
        {
            number_bl_f.innerHTML = (anchor.children.length) + " товара";
        }

    }

}



 setInterval(move, 200);













































// checkbox _big_block

function dinamic_func_for_check()
{   
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
}

setInterval(dinamic_func_for_check, 10);












































// checkbox _big_block

var btn_c = documen_t.querySelector("#btn_c") , 
    btn_o = documen_t.querySelector("#btn_o");

btn_c.addEventListener('click', rest_button);

function rest_button()
{
    var children_search = btn_c.parentNode.children[0] , 
        cr_span = documen_t.createElement("span");
        cr_span.setAttribute("id", "anchor") , 
        box_basket = documen_t.querySelector("#box_basket");

        children_search.remove();

        box_basket.insertBefore(cr_span, btn_o);


        // label.appendChild(cr_span);

}























// show block products all


function dinamic_show()
{


var bnt_check_all = documen_t.querySelector("#bnt_check_all");

    bnt_check_all.addEventListener("click", func_check);
    function func_check()
    {
        var ds = documen_t.querySelectorAll(".ds");


        for(var i = 0 ; i < ds.length; i++)
        {
            ds[i].className = "products";
        }
    }
































            // show block products all
            bnt_check_all.addEventListener("click", check_l);


            function check_l()
            {
                // mass
                var mass_t = ["MEN", "WOMEN", "CHILDREN"] , 
                    mass_number = 0;





                var menu_selection = documen_t.querySelector(".menu_selection");
                    // Part 1
                    menu_selection.children[0].remove();
                    // Part 2

                    // create functions
                        function create_element()
                        {
                            var label_1 = documen_t.createElement("label") , 
                                label_2 = documen_t.createElement("label") ,
                                label_3 = documen_t.createElement("label") ,
                                button = documen_t.createElement("button") ,
                                div_el = documen_t.createElement("div") , 
                                div_el_2 = documen_t.createElement("div");

                                // id

                                label_1.setAttribute("id", "che_ck1"); 
                                label_2.setAttribute("id", "che_ck2"); 
                                label_3.setAttribute("id", "che_ck3"); 
                                button.setAttribute("id", "bnt_check_all");

                                // class

                                label_1.setAttribute("class", "upper"); 
                                label_2.setAttribute("class", "upper"); 
                                label_3.setAttribute("class", "upper"); 
                                button.setAttribute("class", "white_t upper right");
                                div_el.setAttribute("class", "clear");
                                div_el_2.setAttribute("class", "mr_l_34");


                                // skelet

                                div_el_2.appendChild(label_1);
                                div_el_2.appendChild(label_2);
                                div_el_2.appendChild(label_3);
                                div_el_2.appendChild(button);
                                div_el_2.appendChild(div_el);


                                // inner

                                button.innerHTML = "See all products";

                                // end func;

                                return div_el_2;

                        }

                        function cild()
                        {

                            var input = documen_t.createElement("input") , 
                                span_1 = documen_t.createElement("span") ,
                                span_2 = documen_t.createElement("span") , 
                                mass = [];

                                // class 

                                input.setAttribute("class", "checkbox");
                                span_1.setAttribute("class", "checkbox-custom");
                                span_2.setAttribute("class", "label");

                                // name element

                                span_2.style.marginLeft = "8px";
                               

                                // inner
                                span_2.innerHTML = mass_t[mass_number];

                                mass_number++;

                                if(mass_number == 3)
                                {
                                    mass_number = 0 ;
                                }


                                // checked

                                input.setAttribute("checked", "checked");

                                //type 

                                 input.setAttribute("type", "checkbox");

                                // name
                                input.setAttribute("name", "checkbox-test");

                                mass.push(input);
                                mass.push(span_1);
                                mass.push(span_2);

                                return mass;



                        }

                        
                         function for_function ()
                         {
                            var element = create_element(); 
                                
                                  for(var i = 0 ; i < element.children.length ; i++)
                                    {
                                        // add new element func child()
                                        var ch = cild();
                                        if(element.children[i].nodeName == "LABEL")
                                        {
                                            for(var n = 0 ; n < ch.length; n++)
                                            {
                                                element.children[i].appendChild(ch[n]);   
                                            }
                                        };
                                    };

                                    return element;

                         }  

                         menu_selection.appendChild(for_function());

                        
            }






}


setInterval(dinamic_show, 10);























// +++++++++++++++++++++++++++++++++++++++big functions+++++++++++++++++++++++++++++++++++++++++++++++++++++++










// dinamic block products

var left = 0;

function func_dinamic_r()
{
    var element = this.parentNode.parentNode.parentNode.children[1] ,
    dvi = func_dv(element);
    dvi_len_r(dvi, element);
}










function func_dinamic_l()
{
    var element = this.parentNode.parentNode.parentNode.children[1] ,
    dvi = func_dv(element);
    dvi_len_r(dvi, element);
}









// regX

function func_dv(element){

    var element_ch = element.children ,
    element_ch_str = "" ,
    reg = /def_product/gi;

    for(var i = 0 ; i < element_ch.length ; i++)
    {
         element_ch_str += element_ch[i].getAttribute("class");
    }

    return element_ch_str.match(reg);

}







// ask_r

function dvi_len_r(dvi , element)
        {
            switch(dvi.length)
            {
                case 4:{
                     left = left - 385;

                    if(left < - 385)
                        {
                            left = 0;
                        }

                    element.style.left = left + "px";
                };
                break;
            }
        }


// ask_r

 function dvi_len_r(dvi, element)
    {
         switch(dvi.length)
            {
                case 4:{
                  
                    left = left + 385;


                    if(left >=  385)
                        {
                            left = -385;
                        }

                    element.style.left = left + "px";
                };
                break;
            }
    }







// start function

var dinamic_block_left = documen_t.querySelectorAll(".dinamic_block_left") ,
    dinamic_block_right = documen_t.querySelectorAll(".dinamic_block_right");

    for(var i = 0 ; i < dinamic_block_right.length;i++)
    {
       dinamic_block_right[i].onclick = func_dinamic_r;
       dinamic_block_left[i].onclick = func_dinamic_l;
    }




// +++++++++++++++++++++++++++++++++++++++big functions+++++++++++++++++++++++++++++++++++++++++++++++++++++++

































// scroll



// window.scrollTo()
    var scrolled ,
        timer;


    document.getElementById("block_f_i").onclick = function()
    {
        scrolled = window.pageYOffset;
        // window.scrollTo(0,0);
        scrollToTop();
    };

    function scrollToTop()
    {
        if(scrolled > 0)
        {
            window.scrollTo(0, scrolled);
            scrolled = scrolled - 40;// скорость прокрутки 
            timer = setTimeout(scrollToTop, 10);
        }
        else
        {
            clearTimeout(timer);
            window.scrollTo(0,0);
        }
    }












































// auto number in block products

// part1

var def_product = documen_t.querySelectorAll(".def_product");
    
    for(var i = 0 ; i < def_product.length ; i++)
    {
        def_product[i].addEventListener("mouseover" , func_def_product_m);
    }


    function func_def_product_m()
    {
        var th_def = this.parentNode.parentNode.children[0].children[0].children[0].children[0];
        
        var mass_len_ch = this.parentNode.children;


        for(var i = 0 ; i< mass_len_ch.length; i++)
        {
            if(mass_len_ch[i] == this)
            {
                console.log(th_def.innerHTML = (i + 1));
            }
        }


    }










})()

