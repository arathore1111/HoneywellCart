package com.honeywell.utility;

import java.util.Date;

import javax.servlet.http.HttpServletResponse;

public class Utility {

	/**
	 * Function to clear cache
	 * 
	 * @param response
	 *            HttpServletResponse response of http page
	 * @return HttpServletResponse
	 */
	public HttpServletResponse setResponse(HttpServletResponse response) {
		response.setHeader("Cache-Control", "no-cache");
		response.setHeader("Cache-Control", "max-age=0");
		response.setHeader("Expires", new Date().toString());
		return response;
	}
}
