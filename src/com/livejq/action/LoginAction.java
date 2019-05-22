package com.livejq.action;

import java.util.Iterator;
import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.criterion.Criterion;
import org.hibernate.criterion.Restrictions;

import com.livejq.domain.Message;
import com.livejq.domain.User;
import com.livejq.util.ConvertUtils;
import com.livejq.util.HibernateUtils;
import com.livejq.util.TokenUtils;
import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

public class LoginAction extends ActionSupport {

	private static final long serialVersionUID = 1L;
	private String username;
	private String password;
	private Message msg = new Message();//status 0 在客户端不显示提示，1 显示绿色提示成功， 2 显示黄色用户名提示，3 显示黄色密码提示

	public Message getMsg() {
		return msg;
	}

	public void setMsg(Message msg) {
		this.msg = msg;
	}

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
	
	/**
	 * 根据客户端中用户输入的用户名和密码的正确与否，适当给出提示，与用户交互
	 */
	public String execute() {
				
		ActionContext context = ActionContext.getContext();
		Session session = HibernateUtils.getSession();
		Criteria criteria = session.createCriteria(User.class);
		Criterion criterion = Restrictions.eq("username", username);
		criteria.add(criterion);
		@SuppressWarnings("unchecked")
		List<User> uList = criteria.list();
		session.close();
		if(uList.size() != 0) {
			Iterator<User> iterator = uList.iterator();
			while(iterator.hasNext()) {
				User u = (User)iterator.next();
				String sha1 = ConvertUtils.getSha1(password);
				if(sha1.equals(u.getPassword())) {
					if(u.getAuth().intValue() == 0) {							
						msg.setText("登录成功！");
						msg.setStatus(1);
						msg.setUsername(username);
					}else {
						msg.setText("登录成功！");
						msg.setStatus(1);
						String str = TokenUtils.getStr();
						String token = TokenUtils.getToken(str, 30);
						context.getSession().put("username", username);
						context.getSession().put("token", token);
						msg.setToken(token);
						msg.setUsername(username);
					}
					context.getSession().put("username", username);
				}else {
					msg.setText("密码错误！");
					msg.setStatus(3);
				}
			}
		}else {
			msg.setText("用户不存在！");
			msg.setStatus(2);
		}
		return SUCCESS;
	}
}
