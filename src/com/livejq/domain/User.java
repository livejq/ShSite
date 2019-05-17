package com.livejq.domain;

public class User {
	private Integer id;	
	private String username;
	private String password;
	private Byte auth;

	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
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
	public Byte getAuth() {
		return auth;
	}
	public void setAuth(Byte auth) {
		this.auth = auth;
	}
}
