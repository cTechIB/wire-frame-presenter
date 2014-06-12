var 
	menuBottom = document.getElementById( 'wire-tray' ),
	showBottom = document.getElementById( 'showBottom' ),
	walkThrough = document.getElementById( 'walkthrough' ),
	body = document.body;

showBottom.onclick = function() {
	classie.toggle( this, 'active' );
	classie.toggle( menuBottom, 'cbp-spmenu-open' );
};

walkThrough.onclick = function() {
	  classie.toggle( showBottom, 'active' );
	  classie.toggle( menuBottom, 'cbp-spmenu-open' );
	  $(document).foundation('joyride', 'start');
  }
  
 
  function GetChar (event){
     var chCode = ('charCode' in event) ? event.charCode : event.keyCode;
	 if(chCode == 104) {
   	 	classie.toggle( showBottom, 'active' );
   	 	classie.toggle( menuBottom, 'cbp-spmenu-open' );
	 }
     else if(chCode == 116) {
     	$(document).foundation('joyride', 'start');
		classie.remove( menuBottom, 'cbp-spmenu-open' );
     } else if(chCode == 109) {
     	$('#siteMap').foundation('reveal', 'open');
     }
	 
 }