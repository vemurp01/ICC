/************************************************************************************************************************

Title           :   fiddle1.js        
Developer       :   Poojitha Vemuri  
Page Description:   scripting of the page fiddle1.html
					code for popup, progress bar increment, amount needed change.
functions	:	inc(), popup(), close_btn(), donation().
					
**************************************************************************************************************************/

	var count = 60;
	// Change the amount according to the donation value.
	function donation() {
		var donation = document.getElementById('donation').value;
		var donation_val = document.getElementById('donation_value');
		var donation_limit = donation_val.textContent - donation;
		donation_val.textContent = donation_limit;				
		if (donation_val.textContent < 0) {
			var small_div = document.getElementById('small_div');
			small_div.innerHTML = "Yayy!! we have reached our limit. Thanks for donating";
		}
	}
	// progress bar increases and reaches its end when the needed amount reaches.
	function inc() {
		var donation = document.getElementById('donation').value;
		//If the input donation value is 0$, progress bar doesn't move.
		if(donation!=0){
		count = count + 10;
		document.getElementById('progress_bar').style.width = count + '%';
		}
	}
	
	// When clicked on 'why donate', open a small popup with close button.
	function popup() {	
		mypopup.style.display = "block";
	}
	// When clicked on close button, close the popup.
	function close_btn() {
		mypopup.style.display = "none";
	}
	// Click on anywhere else on the window, close the popup.
	window.onclick = function(event) {
		if (event.target == mypopup) {
			mypopup.style.display = "none";
		}
	}
