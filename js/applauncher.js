/*
 * inviLauncher Code 1.6
 */

/*
 * launch the internal calendar
 * valid parameter
 *  - List (default)
 *  - DayView
 *  - Month
 *  - Year
 */
function appLaunchCALENDAR()
{
	try
	{
		widget.application.launcher.openCalendarDetailWnd("List","");
	}
	catch (e)
	{
		errorCallback(e);
	}
}

/*
 * launch the dolfin browser
 * if bada 2.0 the browser starts with "about:blank
 * else it open browser with "google.com"
 */
function appLaunchWEB()
{
	try {
		if(badaVersion == "Bada/2.0") widget.openURL("");
		else widget.openURL("http://www.google.com");
	}
	catch (e)
	{
		errorCallback(e);
	}
}

/*
 * launch the navigation app (Route 66)
 */
function appLaunchNAV()
{
	try {
		widget.application.launchNavigationApp();
	}
	catch (e) {
		errorCallback(e);
	}
}

/*
 * return if a function invalid
 */
function errorCallback(e){
	alert("Error!\n"+e.code+""+e.message);
}