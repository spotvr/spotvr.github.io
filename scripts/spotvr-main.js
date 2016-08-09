// ********************************************************************
//
// Javascript for KKLabs' SPOT VR Project
// Author: Geoffrey / SybiL
//
//
//
// ********************************************************************
var userData;

var userDataDefault =
{

};

// ***************************************
// section: Data
// ***************************************



// ********************************************************************
//
// section: shared UI functions
//
// ********************************************************************

function clearUserData() 
  {
  	userData = userDataDefault;
  	saveUserData();
  }

function saveUserData()
  {
    window.localStorage.setItem('beaconGhibliGame', JSON.stringify(userData));

  }

function orientModeMonitor()
  {
  	if(lastScreenWidth!=$(window).width())
  	{
  		console.log("orietation changed detected")
  		viewSizeChanged();
  		lastScreenWidth=$(window).width();
  	}
    setTimeout(orientModeMonitor,1000);
  }

function viewSizeChanged() 
  {
  	adjustMainAreaSize();
  }

var detectedWidth=0;
var detectecHeight=0;

function adjustMainAreaSize()
  {

  	$("body").hide();
  	detectedWidth = $(window).width();
  	detectedHeight = $(window).height();
  	$("body").show();

    console.log("adjustMainAreaSize");
    console.log("now width "+detectedWidth);
    console.log("now height "+detectedHeight);

  	if(detectedWidth>detectedHeight)
  	{

      console.log("landscape");
  	}
  	else
  	{
 

      $(".mainUArea").css("width", detectedWidth+"px");
      $(".mainUArea").css("height", detectedHeight+"px");
      
      console.log("adjustMainAreaSize by js: ");


      if( detectedWidth >= 800)
      {

        console.log("RWD width>=800 detected");

      }

      // for iPad layout 
      var iPadWidth = 768;
      var iPadWidthScale = 768/375; //ratio by i6
      var iPadHeightScale = 1024/667; //ratio by i6
      var iPadSelfScale = 1024/768; //1.333

      if( detectedWidth >= iPadWidth & detectedHeight / detectedWidth <= iPadSelfScale)
      {

        console.log("iPad detected");


      }

      // for Nexus7 layout 
      if( detectedWidth >= 600 && detectedWidth <=767 )
      {
        console.log("Pad detected");

      } 

      // for i6 layout 
      var i6Width = 375;
      var i6SelfScale = 667/375; //1.77866

      // for i6Plus layout
      var i6PlusWidth = 414;
      var i6PlusHeight = 736;
      var i6PlusWidthScale = 414/375; //ratio by i6
      var i6PlusHeightScale = 736/667; //ratio by i6
      var i6PlusSelfScale = 736/414; //1.77778

      if( detectedWidth >= i6PlusWidth & detectedHeight <= i6PlusHeight)
      { 


        console.log("i6Plus detected");
      }

      // for i5 layout 
      var i5Width = 320;
      var i5WidthScale = 320/375; //ratio by i6
      var i5HeightScale = 568/667; //ratio by i6
      var i5SelfScale = 568/320; //1.775

      if ( detectedWidth <= i5Width )
      {

        console.log("i5 detected");
      }
      
  	}

  }

function clearAndReload() {
   clearUserData();
   window.location.reload();
}

function arraySum(array) {
  var sum = 0;
  var i=0;i<userData.stageClear.length;i++;
  $.each(array,function(i,val) {
    sum += val;
  });
  return sum;

  // console.log("共幾關: "+i);
  saveUserData();
}

// use beacon to show level's content & game progress
var beaconManager = new spotJsBEL();


var beaconHandler = function(beaconArray) 
{   
  //beacon detected Situation: detected beacon 
  //if(beaconArray>=1)

    
};

beaconManager.onBeaconChanged(beaconHandler);


// (GW) [coding convention] window ready (document load) 置於 js 檔最後

$(window).ready(function () {

  /*
  window.console = {
    log   : function(){},
    dir   : function(){},
    info  : function(){},
    error : function(){},
    warn  : function(){}
  };
  */

  // start to minitor orientation change (workaround for iOS no detection in iFrame)
  lastScreenWidth=$(window).width();
  setTimeout(orientModeMonitor,1000);

  // == adjust UI to fix the window  ==
  adjustMainAreaSize();

  // = check local storage ==
  var beaconTicketUserDataPlain = window.localStorage.getItem('beaconGhibliGame');

  if(beaconTicketUserDataPlain==null)
  {
  	userData = userDataDefault;
  }
  else
  {
  	userData = JSON.parse(beaconTicketUserDataPlain);
  }

  // init beaconManager
  // beaconManager.init();

});