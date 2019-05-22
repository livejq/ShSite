package com.livejq.action;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;

import com.livejq.domain.Book;
import com.livejq.domain.Resource;
import com.livejq.domain.Teacher;
import com.livejq.domain.Theme;
import com.livejq.domain.User;
import com.livejq.util.HibernateUtils;
import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

public class AdminAction extends ActionSupport {

	private static final long serialVersionUID = 1L;
	private String username;
	private String token;
	private List<User> users;
	private List<Teacher> teachers;
	private String content;
	private List<Book> books;
	private List<Resource> resources;

	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public List<Book> getBooks() {
		return books;
	}
	public void setBooks(List<Book> books) {
		this.books = books;
	}
	public List<Resource> getResources() {
		return resources;
	}
	public void setResources(List<Resource> resources) {
		this.resources = resources;
	}
	public List<Teacher> getTeachers() {
		return teachers;
	}
	public void setTeachers(List<Teacher> teachers) {
		this.teachers = teachers;
	}
	public List<User> getUsers() {
		return users;
	}
	public void setUsers(List<User> users) {
		this.users = users;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}
	
	/**
	 * 登录时异步发送请求验证用户权限，只有验证为管理员时，才会在服务端生成随机的30位大小写字母加数字的字符串的token响应给客户端
	 *，客户端需携带这些验证信息再次发送请求，请求登录后台管理，若验证通过则跳转到管理员后台页面
	 */
	public String execute() {
		ActionContext context = ActionContext.getContext();
		String name = (String) context.getSession().get("username");
		String tk = (String) context.getSession().get("token");
		if(username.equals(name) && token.equals(tk)) {
			Session session = HibernateUtils.getSession();
			String hql = "from User";
			Query query = session.createQuery(hql);
			@SuppressWarnings("unchecked")
			List<User> list = query.list();
			users = list;
			
			hql = "from Teacher";
			query = session.createQuery(hql);
			@SuppressWarnings("unchecked")
			List<Teacher> teas = query.list();
			teachers = teas;
			
			Theme theme = (Theme)session.get(Theme.class, 1);
			content = theme.getContent();
			
			hql = "from Book";
			query = session.createQuery(hql);
			@SuppressWarnings("unchecked")
			List<Book> b = query.list();
			books = b;
			
			hql = "from Resource";
			query = session.createQuery(hql);
			@SuppressWarnings("unchecked")
			List<Resource> r = query.list();
			resources = r;
			
			session.close();
			return SUCCESS;
		}else {
			return ERROR;
		}			
	}
}
