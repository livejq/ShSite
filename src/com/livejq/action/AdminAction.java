package com.livejq.action;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;

import com.livejq.domain.User;
import com.livejq.util.HibernateUtils;
import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

public class AdminAction extends ActionSupport {

	private static final long serialVersionUID = 1L;
	private String username;
	private String token;
	private List<User> users;
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
			
			return SUCCESS;
		}else {
			return ERROR;
		}			
	}
}
