package org.wasabi.fands.superUI.web.filter;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;

import org.apache.log4j.Logger;

public class EncodingFilter implements Filter {
   private static final Logger log=Logger.getLogger(EncodingFilter.class);
   private static final String CHARSET_ENCONDING="UTF-8";
   public void destroy() {
		log.info("--->字符编码过滤器被销毁");

	}
	public void doFilter(ServletRequest req, ServletResponse rep,
			FilterChain fc) throws IOException, ServletException {
		if(req instanceof HttpServletRequest){
			log.debug("请求类型POST匹配");
			HttpServletRequest req1=(HttpServletRequest)req;
			if(shouldSetCharEncoding(req1)){
				log.debug("对POST请求进行字符编码");
				req1.setCharacterEncoding(CHARSET_ENCONDING);
				log.debug("对POST请求的字符编码完成");
			}
		}
		fc.doFilter(req, rep);
	}
    private boolean shouldSetCharEncoding(HttpServletRequest req){
    	String m=req.getMethod();
    	return "POST".equals(m);	
    }
	public void init(FilterConfig arg0) throws ServletException {
		log.info("--->字符编码过滤器初始化");

	}

}
