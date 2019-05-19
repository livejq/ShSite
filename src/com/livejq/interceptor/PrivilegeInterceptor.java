package com.livejq.interceptor;

import com.opensymphony.xwork2.Action;
import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionInvocation;
import com.opensymphony.xwork2.interceptor.AbstractInterceptor;

public class PrivilegeInterceptor extends AbstractInterceptor {

	private static final long serialVersionUID = 1L;

	@Override
	public String intercept(ActionInvocation invocation) throws Exception {
		ActionContext context = invocation.getInvocationContext();
		String username = (String) context.getSession().get("username");
		String token = (String) context.getSession().get("token");
		if(username != null && token != null ){
			return invocation.invoke();
		}else{
			return Action.ERROR;
		}	
	}
}
