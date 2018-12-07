<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html> 
<body>
  <h2>CHECKPOINT NOTES _ COMMAND</h2>
  <table border="1">
    <tr bgcolor="#9acd32">
      <th style="text-align:left">CMD-CLASS/Type</th>
      <th style="text-align:left">Artist</th>
    </tr>
    <xsl:for-each select="cnotes/cmd">
    <tr>
      <td><xsl:value-of select="cmdclass"/>/<xsl:value-of select="cmdType"/>/<xsl:value-of select="cmdTitle"/></td>
      <td><xsl:value-of select="cmdNotesBrf"/></td>
<!-- 2nd table --> 	  
	<table border="1">
		<tr bgcolor="#10cd92">
		<th style="text-align:left">CMD-CLASS/Type</th>
		<th style="text-align:left">Artist</th>
    </tr>
    <xsl:for-each select="cnotes/cmd">
    <tr>
      <td><xsl:value-of select="cmdclass"/>/<xsl:value-of select="cmdType"/>/<xsl:value-of select="cmdTitle"/></td>
      <td><xsl:value-of select="cmdNotesBrf"/></td>
    </tr>
    </xsl:for-each>
	</table>
	  
	  
	  
	  
    </tr>
    </xsl:for-each>
  </table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>

