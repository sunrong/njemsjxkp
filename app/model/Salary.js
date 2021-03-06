Ext.define('JxkpApp.model.Salary', {
extend: 'Ext.data.Model', 
	fields: [
		{ name: 'EMP_NAME', type: 'string' },
		{ name: 'EMP_ID', type: 'int' },
		{ name: 'DEP_ID', type: 'int' },
		{ name: 'TYPE', type: 'String' },
		{ name: 'IDS', type: 'string'},
		{ name: 'ATT_MONTH', type: 'date', dateFormat : 'Y-m-d H:i:s.u'},
		{ name: 'STATION', type: 'int' },
		{ name: 'SEGMENT', type: 'string' },
		{ name: 'ATTENDENCE', type: 'float' },
		{ name: 'JXDF', type: 'int' },
		{ name: 'JXGZ', type: 'float' },
		{ name: 'RCJB', type: 'float' },
		{ name: 'CT', type: 'float' },
		{ name: 'YCXJJ', type: 'float' },
		{ name: 'BZZJT', type: 'float' },
		{ name: 'YBJT', type: 'float' },
		{ name: 'WQJT', type: 'float' },
		{ name: 'JBGZ', type: 'float' },
		{ name: 'QTJ', type: 'float' },
		{ name: 'BF', type: 'float' },
		{ name: 'GSKH', type: 'float' },
		{ name: 'BMKH', type: 'float' },
		{ name: 'XJFF', type: 'float' },
		{ name: 'TOTAL', type: 'float' },
		{ name: 'MEMO', type: 'string' },
		{ name: 'MODILOCK', type: 'int' },
		{ name: 'check', type: 'auto' },
		{ name: 'QUIT', type: 'bool' }


	]
});