package com.livejq.action;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;

import org.apache.struts2.ServletActionContext;
import org.hibernate.Session;

import com.livejq.domain.Theme;
import com.livejq.util.HibernateUtils;
import com.opensymphony.xwork2.ActionSupport;

public class InitialAction extends ActionSupport {

	private static final long serialVersionUID = 1L;

	private String content;
	
	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	/**
	 * 先判断数据库中是否有content首页的主题说明内容，
	 * 若无，则直接读取目录下的theme.txt文件中的默认数据
	 * 
	 * 以下纯为解析目录下的txt文件的练习，为了更好的体验，还是用ajax
	 */
	public String execute() {

		Session session = HibernateUtils.getSession();
		Theme theme = (Theme)session.get(Theme.class, 1);
		session.close();
		if(theme.getContent().length() > 0) {// 就算数据库中的content列中的内容为空 ！=null也判断为真！！ 得用长度来判断是否有内容
			content = theme.getContent();
			System.out.println("正在获取数据库中theme数据...");
		}else {
			System.out.println("正在获取本地文件中theme数据...");
			String filePath = "/text/theme.txt";
			InputStream inputStream = ServletActionContext.getServletContext().getResourceAsStream(filePath);
			BufferedReader bis = new BufferedReader(new InputStreamReader(inputStream));
			StringBuilder sb = new StringBuilder();
			String line = "";
			try {
				while((line = bis.readLine()) != null) {
					sb.append(line);
				}
				inputStream.close();
				bis.close();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
//			System.out.println(sb.toString());
			content = sb.toString();
		}
		
		return SUCCESS;
	}
	
	public String get() {
		Session session = HibernateUtils.getSession();
		Theme theme = (Theme)session.get(Theme.class, 1);
		session.close();
		content = theme.getContent();
			
		return SUCCESS;
	}
}
