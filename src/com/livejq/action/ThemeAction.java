package com.livejq.action;
import java.io.ByteArrayInputStream;
import java.io.InputStream;

import org.hibernate.Session;
import org.hibernate.Transaction;

import com.livejq.domain.Theme;
import com.livejq.util.HibernateUtils;
import com.opensymphony.xwork2.ActionSupport;

public class ThemeAction extends ActionSupport {

	private static final long serialVersionUID = 1L;

	private String txt;
	private InputStream inputStream;
	public InputStream getInputStream() {
		return inputStream;
	}
	public String getTxt() {
		return txt;
	}
	public void setTxt(String txt) {
		this.txt = txt;
	}
	
	/**
	 * 修改首页显示的主题内容说明
	 * @return
	 */
	public String modify() {// web安全问题？？没法写入数据到项目相对路径中的文件>>只有绝对路径:(
// 方式一：失败
//		String path = "ssh_demo" + File.separator + "text" + File.separator + "theme.txt";
//		FileWriter fw;
//		try {
//			fw = new FileWriter(path);
//			PrintWriter out = new PrintWriter(fw);  
//	        out.write("xxxx");
//		} catch (IOException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
// 方式二：采用文件上传的策略传输数据 默认为ANSI编码 只能显示英文		
//		String dir = ServletActionContext.getServletContext().getRealPath("/text");
//		
//		File toFile = new File(dir, "theme.txt");
//		System.out.println(toFile.getAbsolutePath());
//		System.out.println(toFile.getPath());
//		try {
//			OutputStream os = new FileOutputStream(toFile);
//			DataOutputStream dos = new DataOutputStream(os);
//			dos.writeChars(txt);
//			dos.flush();
//		} catch (FileNotFoundException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		} catch (IOException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
		
		Session session = HibernateUtils.getSession();
		Transaction t = session.beginTransaction();
		Theme theme = new Theme();
		theme.setId(1);
		theme.setContent(txt);
		session.update(theme);
		t.commit();
		session.close();
		
		String msg = "修改成功！";
		inputStream = new ByteArrayInputStream(msg.getBytes());
		
		return SUCCESS;
	}
}
