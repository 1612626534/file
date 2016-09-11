package com.caesar.action.common;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;



public class RecoderAction extends BaseAction {

	private static final long serialVersionUID = 379311018692341539L;
	
	
	
	public String addRecord() {
		
		Log log = LogFactory.getFactory().getInstance(RecoderAction.class);
		log.info("addr Record method is running.");
		
		return "add";
	}

	public String deleteRecord() {
		return "delete";
	}

	public String updateRecordStatus() {
		return "update";
	}

	public String queryRecordById() {
		return "query";
	}

	public String queryAllRecordById() {
		return "queryAll";
	}
}
