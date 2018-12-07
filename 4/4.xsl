<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html> 
<body>
  <h2>CHECKPOINT NOTES _ COMMAND</h2>
  <table border="2">
    <tr bgcolor="#9acd32">
      <th style="text-align:left">CMD-CLASS/Type - cmd</th>
      <th style="text-align:left">Artist</th>
    </tr>
    <xsl:for-each select="cnotes/cmd">
    <tr>
      <td><font size="3" face="Bookman" color="#0099ff"><xsl:value-of select="cmdclass"/>/<xsl:value-of select="cmdType"/> - </font> <font size="4" face="comic sans ms" color="black"> <xsl:value-of select="cmdTitle"/> </font></td>
      <td><font face="verdana" color="green" size="2"><b>Brief Summary</b></font> - <xsl:value-of select="cmdNotesBrf"/>
<!-- 2nd table --> 	  
	<table border="0">

    <tr>
      <td><font face="verdana" color="green" size="2"><b>Syntax - </b></font><xsl:value-of select="cmdSyntax"/> </td>
    </tr>
	<tr>
      <td><font face="verdana" color="green" size="2"><b>Options -</b></font><xsl:value-of select="cmdOption"/></td>
    </tr>
	
	<tr><td><font face="verdana" color="green" size="2"><b>Example - </b></font><font face="courier new" size="3"><xsl:value-of select="cmdExample"/></font></td>
	</tr>
    
	<tr><td><font face="verdana" color="green" size="2"><b>Notes Extensive - </b></font><xsl:value-of select="cmdNotesExt"/> </td>
	</tr>
	</table>
	
	</td>	
	  
	  
	  
    </tr>
    </xsl:for-each>
  </table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>

