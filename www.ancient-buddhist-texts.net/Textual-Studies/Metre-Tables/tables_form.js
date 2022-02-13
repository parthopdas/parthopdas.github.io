function search_form(tables_Form) {
	if (tables_Form.d.value.length > 0) {
		document.cookie = "d=" + escape(tables_Form.d.value);
		window.location = "Tables-Results.htm";
	}
}
