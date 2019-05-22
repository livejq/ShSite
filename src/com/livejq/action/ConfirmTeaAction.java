package com.livejq.action;

import java.io.ByteArrayInputStream;
import java.io.InputStream;

import org.hibernate.Session;
import com.livejq.domain.Teacher;
import com.livejq.util.HibernateUtils;
import com.opensymphony.xwork2.ActionSupport;

public class ConfirmTeaAction extends ActionSupport {

	private static final long serialVersionUID = 1L;

	
	private InputStream inputStream;
	
	public InputStream getInputStream() {
		return inputStream;
	}

	public void setInputStream(InputStream inputStream) {
		this.inputStream = inputStream;
	}

	/**
	 * 在进入教师信息页面前异步发送验证信息到这里，
	 * 判断数据库是否存在教师信息，若无则返回404，然后在客户端直接调用js解析本地项目中
	 * 的静态文件中的数据。
	 * @return
	 */
	public String confirm() {
		
		Session session = HibernateUtils.getSession();
		Teacher tea = (Teacher)session.get(Teacher.class, 1);
		session.close();
		if(tea != null) {
			String msg = "200";
			inputStream = new ByteArrayInputStream(msg.getBytes());
		}else {
			String msg = "404";
			inputStream = new ByteArrayInputStream(msg.getBytes());
		}
		return SUCCESS;
	}
	
}
