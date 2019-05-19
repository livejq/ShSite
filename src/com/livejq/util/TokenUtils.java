package com.livejq.util;

import java.util.Random;

public class TokenUtils {

	/**
	 * 为验证是否为管理员而生成的20个由数字、大小写字母组成的一串随机字符
	 * @return
	 */
	public static String getStr() {
		
		StringBuilder str = new StringBuilder();
		int end = (int)'z';int start = (int)'A';
		char c;
		while(start <= end) {
			c = (char)start;
			str.append(c);
			if(start == 90) {
				start += 6;
			}
			start++;
		}
		
		for(int i = 0; i < 10; i++) {
			str.append(String.valueOf(i));
		}	
		
		return str.toString();
	}
	
	/**
	 * 
	 * @param str 随机字符的取值
	 * @param length 随机字符长度
	 * @return
	 */
	public static String getToken(String str, int length) {
		
		char[] c = str.toCharArray();
		StringBuilder sb = new StringBuilder();
		Random rd = new Random();
		int strLen = c.length;
		for(int i = 0; i < length; i++) {
			int num =  rd.nextInt(strLen);
			sb.append(c[num]);
		}
		
		return sb.toString();
	}
//	
//	public static void main(String args[]) {
//		System.out.println(getToken(getStr(), 30));
//	}
}
