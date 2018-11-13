$(function (){
   $('.side_bar_item').click(function (){
        $('.sub_side_bar:visible').hide();
        $(this).find('> .sub_side_bar').fadeIn("slow");
   });
   isSideBarHidden = false;
   $('.side_bar_icon > img:first-child').click(function (){
       if(isSideBarHidden == false)
       {
           $('.side_bar_right').hide();
           isSideBarHidden = true;
       }
        else{
           $('.side_bar_right').show();
           isSideBarHidden = false; 
        }
             
   });
});