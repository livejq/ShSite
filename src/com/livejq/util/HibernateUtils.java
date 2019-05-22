package com.livejq.util;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

public class HibernateUtils {

	private static final Configuration config;
	private static final SessionFactory factory;
	
	static {
		System.out.println("Hibernate正在初始化中......");
		config = new Configuration().configure();
		factory = config.buildSessionFactory();
	}
	
	public static Session getSession() {
		System.out.println("正在开启Session......");
		return factory.openSession();
	}
}
