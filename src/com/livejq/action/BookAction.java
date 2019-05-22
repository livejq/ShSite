package com.livejq.action;

import java.io.ByteArrayInputStream;
import java.io.InputStream;
import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;

import com.livejq.domain.Book;
import com.livejq.util.HibernateUtils;
import com.opensymphony.xwork2.ActionSupport;

public class BookAction extends ActionSupport {

	private static final long serialVersionUID = 1L;

	private InputStream inputStream;
	
	public InputStream getInputStream() {
		return inputStream;
	}
	public void setInputStream(InputStream inputStream) {
		this.inputStream = inputStream;
	}

	/**
	 * 客户端点击参考图书页面时先发送同步请求查询数据库中的图书信息，然后封装成xml数据
	 * 格式并响应客户端，然后客户端通过js解析xml数据，最后显示在页面上
	 * @return
	 */
	public String get() {
		StringBuilder xml = new StringBuilder();
		Session session = HibernateUtils.getSession();
		String hql = "from Book";
		Query query = session.createQuery(hql);
		@SuppressWarnings("unchecked")
		List<Book> books = query.list();
		if(books.size() != 0) {
			xml.append("<bookList>");
			for(Book b : books) {
				xml.append("<book id=\"" + b.getId() + "\"><title>" + b.getTitle());
				xml.append("</title><content>" + b.getContent());
				xml.append("</content><pic>" + b.getPic());
				xml.append("</pic></book>");
			}
			xml.append("</bookList>");
			inputStream = new ByteArrayInputStream(xml.toString().getBytes());
		}
		
		return SUCCESS;
	}
	
	
/*	protected void getLocalData() {
		
	}
	
	protected void getServerData() {
		
	}*/
}
