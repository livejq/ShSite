package com.livejq.action;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;

import org.apache.struts2.ServletActionContext;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.json.JSONObject;

import com.livejq.domain.Teacher;
import com.livejq.util.HibernateUtils;
import com.opensymphony.xwork2.ActionSupport;

public class TeacherMsgAction extends ActionSupport {

	private static final long serialVersionUID = 1L;

	private Teacher teacher;
	private String msg;

	public Teacher getTeacher() {
		return teacher;
	}
	public void setTeacher(Teacher teacher) {
		this.teacher = teacher;
	}
	public String getMsg() {
		return msg;
	}
	public void setMsg(String msg) {
		this.msg = msg;
	}
	
	/**
	 * 客户端异步发送请求获取教师信息
	 * @return
	 */
	public String get() {
		Session session = HibernateUtils.getSession();
		Teacher tea = (Teacher)session.get(Teacher.class, 1);
		teacher = tea;
		
		return SUCCESS;
	}
	
	/**
	 * 客户端调用AJAX发送json数据类型的POST请求
	 * @return
	 */
	public String modify() {
		System.out.println(ServletActionContext.getRequest().getContentType());
		System.out.println(ServletActionContext.getRequest().getContentLength());
		String submitMehtod = ServletActionContext.getRequest().getMethod();
        
        if (submitMehtod.equalsIgnoreCase("post")) {
        	try {
        		String jsonStr = getRequestPostStr(ServletActionContext.getRequest());
        		JSONObject jb = new JSONObject(jsonStr);
        		Session session = HibernateUtils.getSession();
        		Transaction t = session.beginTransaction();
        		Teacher tea = new Teacher();
        		tea.setId(1);
        		tea.setName(jb.getString("name"));
        		tea.setDegree(jb.getString("degree"));
        		tea.setResearch(jb.getString("research"));
        		tea.setIntroduce(jb.getString("introduce"));
        		tea.setAchieve(jb.getString("achieve"));// 差点被气死，就因为拼写错误，要不是有调试。。。。
        		tea.setContact(jb.getString("contact"));
        		tea.setPic("images/" + jb.getString("pic"));
        		System.out.println("正在修改教师信息......");
        		session.update(tea);
        		t.commit();
        		session.close();
        		msg = "修改成功!";
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
        }
			
		return SUCCESS;
	}
	
	/**
	 * 读取post请求中携带的内容
	 * 
	 * @param request
	 * @return
	 * @throws IOException
	 */
	public static byte[] getRequestPostBytes(HttpServletRequest request)
            throws IOException {
        int contentLength = request.getContentLength();
        if(contentLength < 0) {
            return null;
        }
        
        byte buffer[] = new byte[contentLength];
        for (int i = 0; i < contentLength;) {
            int readlen = request.getInputStream().read(buffer, i,
                    contentLength - i);
            if (readlen == -1) {
                break;
            }
            i += readlen;
        }
        return buffer;
    }
	
    /**
     * 获取 post 请求内容
     * 
     * @param request
     * @return
     * @throws IOException
     */
    public static String getRequestPostStr(HttpServletRequest request)
            throws IOException {
        byte buffer[] = getRequestPostBytes(request);
        String charEncoding = request.getCharacterEncoding();
        if (charEncoding == null) {
            charEncoding = "UTF-8";
        }
        return new String(buffer, charEncoding);
    }

}
