<?xml version="1.0" encoding="ISO-8859-1"?>

<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<!-- Output root element unaltered -->
<xsl:template match="/*">
<xsl:variable name="name">
	 <xsl:value-of select="name()"/>
</xsl:variable>
 <xsl:element name="{$name}">
	 <xsl:attribute name="accumulateHealth" >
		<xsl:value-of select="'true'"/>
	 </xsl:attribute>
	 <xsl:attribute name="convex" >
		<xsl:value-of select="'false'"/>
	 </xsl:attribute>
<xsl:apply-templates select="node()"/>
   </xsl:element>
</xsl:template>

<!-- center all blocks -->
<xsl:template match="item">
	<item>
		<!--Populate the attributes for the item element with same values.-->
		 <xsl:copy-of select="@*" />
		<block>
			<!--Copy all values, except the ones for z, we will modify those.-->
			 <xsl:copy-of select="block/@*[name()!='lz' and name()!='uz' and name()!='lx' and name()!='ux' and name()!='ly' and name()!='uy']" />

			<xsl:attribute name="lx">
			   <xsl:value-of select="block/@lowerX"/>
			</xsl:attribute>

			<xsl:attribute name="ux">
			   <xsl:value-of select="block/@upperX"/>
			</xsl:attribute>

			<xsl:attribute name="ly">
			   <xsl:value-of select="block/@lowerY"/>
			</xsl:attribute>

			<xsl:attribute name="uy">
			   <xsl:value-of select="block/@upperY"/>
			</xsl:attribute>

			<xsl:attribute name="lz">
			   <xsl:value-of select="block/@lowerZ"/>
			</xsl:attribute>

			<xsl:attribute name="uz">
			   <xsl:value-of select="block/@upperZ"/>
			</xsl:attribute>

		</block>
	</item>
</xsl:template>


</xsl:stylesheet>