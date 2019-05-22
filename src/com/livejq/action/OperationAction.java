package com.livejq.action;

import java.io.ByteArrayInputStream;
import java.io.InputStream;
import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;

import com.livejq.domain.User;
import com.livejq.util.ConvertUtils;
import com.livejq.util.HibernateUtils;
import com.opensymphony.xwork2.ActionSupport;

public class OperationAction extends ActionSupport {

	private static final long serialVersionUID = 1L;

	private int id;
	private String username;
	private String password;
	private Byte auth;
	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Byte getAuth() {
		return auth;
	}

	public void setAuth(Byte auth) {
		this.auth = auth;
	}

	private InputStream inputStream;
	
	public InputStream getInputStream() {
		return inputStream;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	/**
	 * 管理员异步删除用户
	 * @return
	 */
	public String delete() {
		
		Session session = HibernateUtils.getSession();
		Transaction t = session.beginTransaction();
		User user = (User) session.get(User.class, id);
		session.delete(user);
		t.commit();
		session.close();
		
		String msg = "删除成功！";
		inputStream = new ByteArrayInputStream(msg.getBytes());
		
		return SUCCESS;
	}
	
	/**
	 * 管理员异步添加用户（用户包括管理员）
	 * @return
	 */
	public String put() {
	
		Session session = HibernateUtils.getSession();
		Transaction t = session.beginTransaction();
		String hql = "from User";
		Query query = session.createQuery(hql);
		@SuppressWarnings("unchecked")
		List<User> uList = query.list();
		User u = uList.get(uList.size()-1);
		User user = new User();
		user.setId(u.getId());
		user.setUsername(username);
		String sha1 = ConvertUtils.getSha1(password);
		user.setPassword(sha1);
		user.setAuth(auth);
		session.save(user);
		t.commit();
		session.close();
		
		String msg = "添加成功！";
		inputStream = new ByteArrayInputStream(msg.getBytes());
		
		return SUCCESS;
	}
}
