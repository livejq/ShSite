package com.livejq.action;

import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;

import org.apache.struts2.ServletActionContext;
import com.opensymphony.xwork2.ActionSupport;

public class TeacherImgAction extends ActionSupport {

	private static final long serialVersionUID = 1L;
	private File file;
	private String fileFileName;
	private String fileContentType;
	private InputStream inputStream;
	
	public InputStream getInputStream() {
		return inputStream;
	}

	public File getFile() {
		return file;
	}

	public void setFile(File file) {
		this.file = file;
	}

	public String getFileContentType() {
		return fileContentType;
	}

	public void setFileContentType(String fileContentType) {
		this.fileContentType = fileContentType;
	}

	public String getFileFileName() {
		return fileFileName;
	}

	public void setFileFileName(String fileFileName) {
		this.fileFileName = fileFileName;
	}
	
	public String execute() {
		String msg = "";
		try {
			InputStream is = new FileInputStream(getFile());
			String uploadPath = ServletActionContext.getServletContext().getRealPath("/images");
			System.out.println("正在存储图片......");
			File toFile = new File(uploadPath, getFileFileName());
			OutputStream os = new FileOutputStream(toFile);
			
			byte[] buffer = new byte[1024*1024];
			while(-1 != (is.read(buffer, 0, buffer.length))) {
				os.write(buffer);
			}
			os.flush();
			is.close();
			os.close();
		}catch(Exception err) {
			err.printStackTrace();
			msg = "未知错误！";
			inputStream = new ByteArrayInputStream(msg.getBytes());
			
			return SUCCESS;
		}
		
		msg = "上传成功！";
		inputStream = new ByteArrayInputStream(msg.getBytes());
		
		return SUCCESS;
	}
}
