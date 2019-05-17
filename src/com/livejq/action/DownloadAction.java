package com.livejq.action;

import java.io.IOException;
import java.io.InputStream;
import org.apache.struts2.ServletActionContext;

import com.opensymphony.xwork2.ActionSupport;

public class DownloadAction extends ActionSupport {

	private static final long serialVersionUID = 1L;
	private String filename;


	public String getContentType() {
		return ServletActionContext.getServletContext().getMimeType(filename);
	}

	
	public InputStream getDownloadFile() {
		String filePath = "/resource/"+filename;
		return ServletActionContext.getServletContext().getResourceAsStream(filePath);
	}
	
	public void setFilename(String filename) {
		
			System.out.println("setFilename "+filename);
			this.filename = filename;
	}
	
	public String getFilename() throws IOException {
		return encodeDownloadFilename(filename, ServletActionContext.getRequest().getHeader("User-Agent"));
	}
	
	
	private String encodeDownloadFilename(String name, String agent) {
		try {
			// TODO Auto-generated method stub
			if (null != agent && -1 != agent.indexOf("MSIE") || null != agent
	                && -1 != agent.indexOf("Trident")) {// ie

	            name = java.net.URLEncoder.encode(name, "UTF-8");
	            System.out.println("encodeDownloadFilename "+name);
	
	        } else if (null != agent && -1 != agent.indexOf("Mozilla")) {// 火狐,chrome等
	        	
	            name = new String(name.getBytes("UTF-8"), "ISO-8859-1");
	            System.out.println("after encodeDownloadFilename "+name);
	        }
	    } catch (Exception e) {
	        e.printStackTrace();
	    }
		return name;
	}


	public String execute() throws Exception {
		
		return SUCCESS;
	}

}
