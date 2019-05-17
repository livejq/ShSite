package com.livejq.action;

import java.io.ByteArrayInputStream;
import java.io.InputStream;
import com.opensymphony.xwork2.ActionSupport;

public class TestAction extends ActionSupport {

	private static final long serialVersionUID = 1L;
	private int id;
	private InputStream inputStream;
	public InputStream getInputStream() {
		return inputStream;
	}

	public void setInputStream(InputStream inputStream) {
		this.inputStream = inputStream;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}
	
	public String execute(){
		System.out.println(id);
		String msg = "Successful";
		inputStream = new ByteArrayInputStream(msg.getBytes());
		return SUCCESS;
	}
	
}
