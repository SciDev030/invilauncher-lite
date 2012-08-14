/*
 * inviLauncher Code 1.6
 * ---------------------
 * Author Marco Büttner & Pierre Kretschmar
 * (c) Copyright 2011 by SciDev
 * 
 * ToDos
 * - translate confirm text
 * - add (s)LCD and (s)AMOLED theme
 * - add autoscale (wqvga, hvga, wvga)
 */
var WidgetConfig = new Object();
WidgetConfig.Version = "1.6";


/*
 * StyleSwitcher 2.0
 * Author by Marco Büttner
 * (c) Copyright 2011 by SciDev
 */
var n = 0;
function switcher() {
	if (n<1)
	{
		n=n+1;
			document.getElementById("style").href = "css/style-" + n + ".css"; // WVGA-Devices (exp.: Wave 3)
			//document.getElementById("style").href = "css/style-" + n + "_hvga.css"; // HVGA-Devices (exp: Wave M)
			//document.getElementById("style").href = "css/style-" + n + "_wqvga.css"; // WQVGA-Devices (exp: Wave 723)
			document.getElementsByTagName("switchcontent");
			return;
	};
	
	if (n==1)
	{
		n=0;
			document.getElementById("style").href = "css/style-" + n + ".css"; // WVGA-Devices (exp.: Wave 3)
			//document.getElementById("style").href = "css/style-" + n + "_hvga.css"; // HVGA-Devices (exp: Wave M)
			//document.getElementById("style").href = "css/style-" + n + "_wqvga.css"; // WQVGA-Devices (exp: Wave 723)
			document.getElementsByTagName("switchcontent");
			return;
	};
};

/*
 * Initial Code
 * Author Pierre Kretschmar
 * Event trigged only on the first start, after reboot or new installation
 * We recommend nothing to change here
 * 
 * Description:
 * If status empty or null inviLauncher shows a hint that the design is 100% invisible,
 * else the inviLauncher start normal
 */
function appInit() {
	load(status); // load current status (default is null)
	if(load(status) == "" || load(status) == null)
	{
		setTimeout("firstcheck()",1000); // only after installation
	}
	else
	{
		document.getElementById("style").href = "css/style-0.css";
		document.getElementsByTagName("switchcontent");
		return;
	}
}
/*
 * CheckUp-System 1.0
 * Author Marco Büttner
 * 
 * History:
 * Added after last reject by SamsungApps
 * 
 * Description:
 * If message confirm it shows ONLY on the first start the box elements
 * else it start with invisible box elements
 */
function firstcheck() {
	confirm = confirm("inviLauncher Lite\nThis is the first startup. If you confirm this message the inviLauncher Lite will start with showing icons. Otherwise the boxes wouldn't display on the first start.");
	if(confirm == true) {
		checkagain = false;
		save(checkagain, status);
		document.getElementById("style").href = "css/style-1.css";
		document.getElementsByTagName("switchcontent");
		return;
	}
	else {
		checkagain = false;
		save(checkagain, status);
		document.getElementById("style").href = "css/style-0.css";
		document.getElementsByTagName("switchcontent");
		return;
	}
}

/*
 * save and load system
 */
function save(value, status) {
	widget.setPreferenceForKey(value, status);
}

function load(status) {
	startcheck = widget.preferenceForKey(status);
	return startcheck;
}