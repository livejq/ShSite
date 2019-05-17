package com.livejq.action;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.criterion.Criterion;
import org.hibernate.criterion.Restrictions;

import com.livejq.domain.Message;
import com.livejq.domain.User;
import com.livejq.util.ConvertUtils;
import com.livejq.util.HibernateUtils;
import com.opensymphony.xwork2.ActionSupport;

public class RegisterAction extends ActionSupport {

	private static final long serialVersionUID = 1L;
	private static final Byte auth = 0;// 默认都为普通用户
	private String username;
	private String password;
	private Message msg = new Message();//status 0 在客户端不显示提示，1 显示绿色提示， 2 显示黄色提示

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


	public String execute(){
		
		Session session = HibernateUtils.getSession();
		Criteria criteria = session.createCriteria(User.class);
		Criterion criterion = Restrictions.eq("username", username);
		criteria.add(criterion);
		@SuppressWarnings("unchecked")
		List<User> users = criteria.list();
		if(users.size() == 0 || users == null) {
			if(password != null) {
				Transaction t = session.beginTransaction();
				String sha1 = ConvertUtils.getSha1(password);
				User user = new User();
				user.setUsername(username);
				user.setPassword(sha1);
				user.setAuth(auth);
				session.save(user);
				t.commit();
				session.close();
				msg.setText("注册成功！");
				msg.setStatus(1);
			}else {
				msg.setStatus(0);
			}
		}else {		
			msg.setText("用户已存在！");
			msg.setStatus(2);
		}
		
		return SUCCESS;
	}
}
