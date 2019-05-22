package com.livejq.action;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;

import com.livejq.domain.Resource;
import com.livejq.util.HibernateUtils;
import com.opensymphony.xwork2.ActionSupport;

public class ResourceAction extends ActionSupport {

	private static final long serialVersionUID = 1L;

	private List<Resource> resource;

	public List<Resource> getResource() {
		return resource;
	}

	/**
	 * 获取数据库中的电子书信息
	 * @return
	 */
	public String get() {
		Session session = HibernateUtils.getSession();
		String hql = "from Resource";
		Query query = session.createQuery(hql);
		@SuppressWarnings("unchecked")
		List<Resource> res = query.list();
		resource = res;
		session.close();
		
		System.out.println("正在查询相关书籍资料......");
		return SUCCESS;
	}
}
